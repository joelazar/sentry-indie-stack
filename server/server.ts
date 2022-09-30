import path from "path";

import { createRequestHandler } from "@remix-run/express";
import * as Sentry from "@sentry/remix";
import compression from "compression";
import express from "express";
import morgan from "morgan";

const BUILD_DIR = path.join(process.cwd(), "build");

function loadBuild() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(BUILD_DIR);
}

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.GROWBLOCKS_ENV,
  tracesSampleRate: 1.0,
  enabled: ["PROD", "PREPROD", "PREVIEW"].includes(
    process.env.GROWBLOCKS_ENV || ""
  ),
  release: process.env.RELEASE_VERSION,
});

const app = express();

app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Remix fingerprints its assets so we can cache forever.
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

// Everything else (like favicon.ico) is cached for an hour. You may want to be
// more aggressive with this caching.
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
        return createRequestHandler({
          build: loadBuild(),
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : Sentry.wrapExpressCreateRequestHandler(createRequestHandler)({
        build: loadBuild(),
        mode: process.env.NODE_ENV,
      })
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
