## Steps for reproducing bug

In root folder:

```
yarn
```

In `myapp` folder:

```
yarn setup
yarn build
yarn dev
```

The first request which hits the server will take it down immediately with the following log:

```
❯ yarn dev
[0] npm WARN ignoring workspace config at /home/joelazar/git/joelazar/sentry-indie-stack/myapp/.npmrc
[0]
[0] > generate:css
[0] > tailwindcss -o ./app/styles/tailwind.css --watch
[0]
[1] Express server listening on port 3000
[0]
[0] Rebuilding...
[0] Done in 192ms.
[1] Error: Cannot find module '/home/joelazar/git/joelazar/sentry-indie-stack/myapp/node_modules/react-router-dom'
[1] Require stack:
[1] - /home/joelazar/git/joelazar/sentry-indie-stack/myapp/build/server.js
[1]     at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
[1]     at Function.Module._load (node:internal/modules/cjs/loader:778:27)
[1]     at Module.require (node:internal/modules/cjs/loader:1005:19)
[1]     at require (node:internal/modules/cjs/helpers:102:18)
[1]     at /home/joelazar/git/joelazar/sentry-indie-stack/myapp/build/server.js:30185:52
[1]     at /home/joelazar/git/joelazar/sentry-indie-stack/myapp/build/server.js:30185:17
[1] yarn dev:remix exited with code 1
--> Sending SIGTERM to other processes..
[0] yarn dev:css exited with code 1
```
