import{a as L}from"/build/_shared/chunk-JA76ZJ7B.js";import"/build/_shared/chunk-QRWXSRWG.js";import{a as F}from"/build/_shared/chunk-FPOB764B.js";import{a as E,c as x,f as g,j as v,m as b,q as y}from"/build/_shared/chunk-JYJW4FXR.js";import{c as s}from"/build/_shared/chunk-Q3IECNXJ.js";var t=s(E()),h=s(F()),N=s(L());var r=s(y());var T=()=>({title:"Sign Up"});function A(){var l,d,n,m,u;let[a]=x(),R=(l=a.get("redirectTo"))!=null?l:void 0,e=b(),o=t.useRef(null),i=t.useRef(null);return t.useEffect(()=>{var c,p,f,w;(c=e==null?void 0:e.errors)!=null&&c.email?(p=o.current)==null||p.focus():(f=e==null?void 0:e.errors)!=null&&f.password&&((w=i.current)==null||w.focus())},[e]),(0,r.jsx)("div",{className:"flex min-h-full flex-col justify-center",children:(0,r.jsx)("div",{className:"mx-auto w-full max-w-md px-8",children:(0,r.jsxs)(v,{method:"post",className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),(0,r.jsxs)("div",{className:"mt-1",children:[(0,r.jsx)("input",{ref:o,id:"email",required:!0,autoFocus:!0,name:"email",type:"email",autoComplete:"email","aria-invalid":(d=e==null?void 0:e.errors)!=null&&d.email?!0:void 0,"aria-describedby":"email-error",className:"w-full rounded border border-gray-500 px-2 py-1 text-lg"}),((n=e==null?void 0:e.errors)==null?void 0:n.email)&&(0,r.jsx)("div",{className:"pt-1 text-red-700",id:"email-error",children:e.errors.email})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),(0,r.jsxs)("div",{className:"mt-1",children:[(0,r.jsx)("input",{id:"password",ref:i,name:"password",type:"password",autoComplete:"new-password","aria-invalid":(m=e==null?void 0:e.errors)!=null&&m.password?!0:void 0,"aria-describedby":"password-error",className:"w-full rounded border border-gray-500 px-2 py-1 text-lg"}),((u=e==null?void 0:e.errors)==null?void 0:u.password)&&(0,r.jsx)("div",{className:"pt-1 text-red-700",id:"password-error",children:e.errors.password})]})]}),(0,r.jsx)("input",{type:"hidden",name:"redirectTo",value:R}),(0,r.jsx)("button",{type:"submit",className:"w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",children:"Create Account"}),(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsxs)("div",{className:"text-center text-sm text-gray-500",children:["Already have an account?"," ",(0,r.jsx)(g,{className:"text-blue-500 underline",to:{pathname:"/login",search:a.toString()},children:"Log in"})]})})]})})})}export{A as default,T as meta};
