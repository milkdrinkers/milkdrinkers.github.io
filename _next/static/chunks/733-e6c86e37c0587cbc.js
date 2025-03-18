"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{493:(e,t,n)=>{n.d(t,{Tab:()=>Z,Tabs:()=>G});var i=n(1421),r=n(9815),a=n(7860),o=n(9881),l=n(825),s=n(3775),d=n(1205),c=n(6471),h=n(4416),u=n(4991),m=n(6689),g=n(2262);function v(e){let t,{onFocus:n}=e,[i,r]=(0,l.useState)(!0),a=(t=(0,l.useRef)(!1),(0,c.s)(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return i?l.createElement(g.j,{as:"button",type:"button",features:g.u.Focusable,onFocus:e=>{e.preventDefault();let t,i=50;t=requestAnimationFrame(function e(){if(i--<=0){t&&cancelAnimationFrame(t);return}if(n()){if(cancelAnimationFrame(t),!a.current)return;r(!1);return}t=requestAnimationFrame(e)})}}):null}var f=n(6606),x=n(1047),p=n(1192),b=n(9697),w=n(1269);let E=l.createContext(null);function y(e){let{children:t}=e,n=l.useRef({groups:new Map,get(e,t){var n;let i=this.groups.get(e);i||(i=new Map,this.groups.set(e,i));let r=null!=(n=i.get(t))?n:0;return i.set(t,r+1),[Array.from(i.keys()).indexOf(t),function(){let e=i.get(t);e>1?i.set(t,e-1):i.delete(t)}]}});return l.createElement(E.Provider,{value:n},t)}function S(e){let t=l.useContext(E);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=l.useId(),[i,r]=t.current.get(e,n);return l.useEffect(()=>r,[]),i}var I=n(3688),L=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(L||{}),C=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(C||{}),D=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(D||{});let T={0(e,t){var n;let i=(0,f.wl)(e.tabs,e=>e.current),r=(0,f.wl)(e.panels,e=>e.current),a=i.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),o={...e,tabs:i,panels:r};if(t.index<0||t.index>i.length-1){let n=(0,x.Y)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,x.Y)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===a.length)return o;let r=(0,x.Y)(n,{0:()=>i.indexOf(a[0]),1:()=>i.indexOf(a[a.length-1])});return{...o,selectedIndex:-1===r?e.selectedIndex:r}}let l=i.slice(0,t.index),s=[...i.slice(t.index),...l].find(e=>a.includes(e));if(!s)return o;let d=null!=(n=i.indexOf(s))?n:e.selectedIndex;return -1===d&&(d=e.selectedIndex),{...o,selectedIndex:d}},1(e,t){if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],i=(0,f.wl)([...e.tabs,t.tab],e=>e.current),r=e.selectedIndex;return e.info.current.isControlled||-1===(r=i.indexOf(n))&&(r=e.selectedIndex),{...e,tabs:i,selectedIndex:r}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,f.wl)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},N=(0,l.createContext)(null);function k(e){let t=(0,l.useContext)(N);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}N.displayName="TabsDataContext";let A=(0,l.createContext)(null);function z(e){let t=(0,l.useContext)(A);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,z),t}return t}function M(e,t){return(0,x.Y)(t.type,T,e,t)}A.displayName="TabsActionsContext";let P=w.Ac.RenderStrategy|w.Ac.Static,O=(0,w.FX)(function(e,t){var n,i;let r=(0,l.useId)(),{id:h="headlessui-tabs-tab-".concat(r),disabled:g=!1,autoFocus:v=!1,...E}=e,{orientation:y,activation:L,selectedIndex:C,tabs:D,panels:T}=k("Tab"),N=z("Tab"),A=k("Tab"),[M,P]=(0,l.useState)(null),O=(0,l.useRef)(null),U=(0,m.P)(O,t,P);(0,c.s)(()=>N.registerTab(O),[N,O]);let j=S("tabs"),F=D.indexOf(O);-1===F&&(F=j);let R=F===C,W=(0,d._)(e=>{var t;let n=e();if(n===f.Me.Success&&"auto"===L){let e=null==(t=(0,b.T)(O))?void 0:t.activeElement,n=A.tabs.findIndex(t=>t.current===e);-1!==n&&N.change(n)}return n}),B=(0,d._)(e=>{let t=D.map(e=>e.current).filter(Boolean);if(e.key===I.D.Space||e.key===I.D.Enter){e.preventDefault(),e.stopPropagation(),N.change(F);return}switch(e.key){case I.D.Home:case I.D.PageUp:return e.preventDefault(),e.stopPropagation(),W(()=>(0,f.CU)(t,f.BD.First));case I.D.End:case I.D.PageDown:return e.preventDefault(),e.stopPropagation(),W(()=>(0,f.CU)(t,f.BD.Last))}if(W(()=>(0,x.Y)(y,{vertical:()=>e.key===I.D.ArrowUp?(0,f.CU)(t,f.BD.Previous|f.BD.WrapAround):e.key===I.D.ArrowDown?(0,f.CU)(t,f.BD.Next|f.BD.WrapAround):f.Me.Error,horizontal:()=>e.key===I.D.ArrowLeft?(0,f.CU)(t,f.BD.Previous|f.BD.WrapAround):e.key===I.D.ArrowRight?(0,f.CU)(t,f.BD.Next|f.BD.WrapAround):f.Me.Error}))===f.Me.Success)return e.preventDefault()}),Y=(0,l.useRef)(!1),_=(0,d._)(()=>{var e;Y.current||(Y.current=!0,null==(e=O.current)||e.focus({preventScroll:!0}),N.change(F),(0,p._)(()=>{Y.current=!1}))}),G=(0,d._)(e=>{e.preventDefault()}),{isFocusVisible:Z,focusProps:H}=(0,a.o)({autoFocus:v}),{isHovered:q,hoverProps:V}=(0,o.M)({isDisabled:g}),{pressed:K,pressProps:X}=(0,s.Z)({disabled:g}),$=(0,l.useMemo)(()=>({selected:R,hover:q,active:K,focus:Z,autofocus:v,disabled:g}),[R,q,Z,K,v,g]),Q=(0,w.v6)({ref:U,onKeyDown:B,onMouseDown:G,onClick:_,id:h,role:"tab",type:(0,u.c)(e,M),"aria-controls":null==(i=null==(n=T[F])?void 0:n.current)?void 0:i.id,"aria-selected":R,tabIndex:R?0:-1,disabled:g||void 0,autoFocus:v},H,V,X);return(0,w.Ci)()({ourProps:Q,theirProps:E,slot:$,defaultTag:"button",name:"Tabs.Tab"})}),U=(0,w.FX)(function(e,t){let{defaultIndex:n=0,vertical:i=!1,manual:r=!1,onChange:a,selectedIndex:o=null,...s}=e,u=i?"vertical":"horizontal",g=r?"manual":"auto",x=null!==o,p=(0,h.Y)({isControlled:x}),b=(0,m.P)(t),[E,S]=(0,l.useReducer)(M,{info:p,selectedIndex:null!=o?o:n,tabs:[],panels:[]}),I=(0,l.useMemo)(()=>({selectedIndex:E.selectedIndex}),[E.selectedIndex]),L=(0,h.Y)(a||(()=>{})),C=(0,h.Y)(E.tabs),D=(0,l.useMemo)(()=>({orientation:u,activation:g,...E}),[u,g,E]),T=(0,d._)(e=>(S({type:1,tab:e}),()=>S({type:2,tab:e}))),k=(0,d._)(e=>(S({type:3,panel:e}),()=>S({type:4,panel:e}))),z=(0,d._)(e=>{P.current!==e&&L.current(e),x||S({type:0,index:e})}),P=(0,h.Y)(x?e.selectedIndex:E.selectedIndex),O=(0,l.useMemo)(()=>({registerTab:T,registerPanel:k,change:z}),[]);(0,c.s)(()=>{S({type:0,index:null!=o?o:n})},[o]),(0,c.s)(()=>{if(void 0===P.current||E.tabs.length<=0)return;let e=(0,f.wl)(E.tabs,e=>e.current);e.some((e,t)=>E.tabs[t]!==e)&&z(e.indexOf(E.tabs[P.current]))});let U=(0,w.Ci)();return l.createElement(y,null,l.createElement(A.Provider,{value:O},l.createElement(N.Provider,{value:D},D.tabs.length<=0&&l.createElement(v,{onFocus:()=>{var e,t;for(let n of C.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),U({ourProps:{ref:b},theirProps:s,slot:I,defaultTag:"div",name:"Tabs"}))))}),j=(0,w.FX)(function(e,t){let{orientation:n,selectedIndex:i}=k("Tab.List"),r=(0,m.P)(t),a=(0,l.useMemo)(()=>({selectedIndex:i}),[i]);return(0,w.Ci)()({ourProps:{ref:r,role:"tablist","aria-orientation":n},theirProps:e,slot:a,defaultTag:"div",name:"Tabs.List"})}),F=(0,w.FX)(function(e,t){let{selectedIndex:n}=k("Tab.Panels"),i=(0,m.P)(t),r=(0,l.useMemo)(()=>({selectedIndex:n}),[n]);return(0,w.Ci)()({ourProps:{ref:i},theirProps:e,slot:r,defaultTag:"div",name:"Tabs.Panels"})}),R=(0,w.FX)(function(e,t){var n,i,r,o;let s=(0,l.useId)(),{id:d="headlessui-tabs-panel-".concat(s),tabIndex:h=0,...u}=e,{selectedIndex:v,tabs:f,panels:x}=k("Tab.Panel"),p=z("Tab.Panel"),b=(0,l.useRef)(null),E=(0,m.P)(b,t);(0,c.s)(()=>p.registerPanel(b),[p,b]);let y=S("panels"),I=x.indexOf(b);-1===I&&(I=y);let L=I===v,{isFocusVisible:C,focusProps:D}=(0,a.o)(),T=(0,l.useMemo)(()=>({selected:L,focus:C}),[L,C]),N=(0,w.v6)({ref:E,id:d,role:"tabpanel","aria-labelledby":null==(i=null==(n=f[I])?void 0:n.current)?void 0:i.id,tabIndex:L?h:-1},D),A=(0,w.Ci)();return L||null!=(r=u.unmount)&&!r||null!=(o=u.static)&&o?A({ourProps:N,theirProps:u,slot:T,defaultTag:"div",features:P,visible:L,name:"Tabs.Panel"}):l.createElement(g.j,{"aria-hidden":"true",...N})}),W=Object.assign(O,{Group:U,List:j,Panels:F,Panel:R});var B=n(8674),Y=n(5907);function _(e){return!!e&&"object"==typeof e&&"label"in e}let G=e=>{let t,n,a,o,s,d,c,h,u,m,g,v;let f=(0,r.c)(30),{items:x,children:p,storageKey:b,defaultIndex:w,selectedIndex:E,onChange:y,className:S,tabClassName:I}=e,L=void 0===w?0:w,[C,D]=(0,l.useState)(L),T=(0,Y.Q)(),N=(0,l.useRef)(null);f[0]!==E?(t=()=>{void 0!==E&&D(E)},n=[E],f[0]=E,f[1]=t,f[2]=n):(t=f[1],n=f[2]),(0,l.useEffect)(t,n),f[3]!==T?(a=()=>{if(!T)return;let e=N.current.querySelector('[role=tabpanel]:has([id="'.concat(T,'"])'));if(e)for(let[t,n]of Object.entries(N.current.children))n===e&&(D(Number(t)),location.hash="",requestAnimationFrame(()=>{location.hash="#".concat(T)}))},o=[T],f[3]=T,f[4]=a,f[5]=o):(a=f[4],o=f[5]),(0,l.useEffect)(a,o),f[6]!==b?(s=()=>{if(!b)return;let e=function(e){e.key===b&&D(Number(e.newValue))},t=Number(localStorage.getItem(b));return D(Number.isNaN(t)?0:t),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},f[6]=b,f[7]=s):s=f[7],f[8]===Symbol.for("react.memo_cache_sentinel")?(d=[],f[8]=d):d=f[8],(0,l.useEffect)(s,d),f[9]!==y||f[10]!==b?(c=e=>{if(b){let t=String(e);localStorage.setItem(b,t),window.dispatchEvent(new StorageEvent("storage",{key:b,newValue:t}));return}D(e),null==y||y(e)},f[9]=y,f[10]=b,f[11]=c):c=f[11];let k=c;if(f[12]!==S?(h=e=>(0,B.A)("nextra-scrollbar x:overflow-x-auto x:overscroll-x-contain x:overflow-y-hidden","x:mt-4 x:flex x:w-full x:gap-2 x:border-b x:border-gray-200 x:pb-px x:dark:border-neutral-800","x:focus-visible:nextra-focus","function"==typeof S?S(e):S),f[12]=S,f[13]=h):h=f[13],f[14]!==x||f[15]!==I){let e;f[17]!==I?(e=(e,t)=>(0,i.jsx)(W,{disabled:_(e)&&e.disabled,className:e=>{let{selected:t,disabled:n,hover:i,focus:r}=e;return(0,B.A)(r&&"x:nextra-focus x:ring-inset","x:whitespace-nowrap x:cursor-pointer","x:rounded-t x:p-2 x:font-medium x:leading-5 x:transition-colors","x:-mb-0.5 x:select-none x:border-b-2",t?"x:border-current x:outline-none":i?"x:border-gray-200 x:dark:border-neutral-800":"x:border-transparent",t?"x:text-primary-600":n?"x:text-gray-400 x:dark:text-neutral-600 x:pointer-events-none":i?"x:text-black x:dark:text-white":"x:text-gray-600 x:dark:text-gray-200","function"==typeof I?I(e):I)},children:_(e)?e.label:e},t),f[17]=I,f[18]=e):e=f[18],u=x.map(e),f[14]=x,f[15]=I,f[16]=u}else u=f[16];return f[19]!==u||f[20]!==h?(m=(0,i.jsx)(j,{className:h,children:u}),f[19]=u,f[20]=h,f[21]=m):m=f[21],f[22]!==p?(g=(0,i.jsx)(F,{ref:N,children:p}),f[22]=p,f[23]=g):g=f[23],f[24]!==L||f[25]!==k||f[26]!==C||f[27]!==m||f[28]!==g?(v=(0,i.jsxs)(U,{selectedIndex:C,defaultIndex:L,onChange:k,as:l.Fragment,children:[m,g]}),f[24]=L,f[25]=k,f[26]=C,f[27]=m,f[28]=g,f[29]=v):v=f[29],v},Z=e=>{let t,n,a,o,l,s;let d=(0,r.c)(12);d[0]!==e?({children:t,unmount:o,className:n,...a}=e,d[0]=e,d[1]=t,d[2]=n,d[3]=a,d[4]=o):(t=d[1],n=d[2],a=d[3],o=d[4]);let c=void 0!==o&&o;return d[5]!==n?(l=e=>(0,B.A)("x:rounded x:mt-6",e.focus&&"x:nextra-focus","function"==typeof n?n(e):n),d[5]=n,d[6]=l):l=d[6],d[7]!==t||d[8]!==a||d[9]!==l||d[10]!==c?(s=(0,i.jsx)(R,{...a,unmount:c,className:l,children:t}),d[7]=t,d[8]=a,d[9]=l,d[10]=c,d[11]=s):s=d[11],s}},4322:(e,t,n)=>{n.d(t,{SkipNavLink:()=>l});var i=n(1421),r=n(9815),a=n(9146),o=n(8674);let l=e=>{let t,n;let l=(0,r.c)(6),{className:s,id:d,children:c}=e,h=void 0===c?"Skip to Content":c,u="#".concat(void 0===d?"nextra-skip-nav":d);return l[0]!==s?(t=e=>{let{focus:t}=e;return(0,o.A)("nextra-skip-nav",t?"x:nextra-focus x:fixed x:z-50 x:my-3 x:mx-4 x:rounded-lg x:px-3 x:py-2 x:text-sm x:font-bold x:bg-nextra-bg x:border x:border-current":"x:sr-only",s)},l[0]=s,l[1]=t):t=l[1],l[2]!==h||l[3]!==u||l[4]!==t?(n=(0,i.jsx)(a.$,{as:"a",href:u,className:t,children:h}),l[2]=h,l[3]=u,l[4]=t,l[5]=n):n=l[5],n}},7841:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let i=n(1447),r=n(7479),a=n(9379),o=i._(n(2117));function l(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=a.Image},8190:(e,t,n)=>{n.d(t,{ClientWrapper:()=>x});var i=n(1421),r=n(9815),a=n(8674),o=n(825),l=n(4394),s=n(4510),d=n.n(s),c=n(8819);let h=e=>{let t,n;let a=(0,r.c)(4),{activePath:o}=e;return a[0]!==o?(t=o.map(u),a[0]=o,a[1]=t):t=a[1],a[2]!==t?(n=(0,i.jsx)("div",{className:"nextra-breadcrumb x:mt-1.5 x:flex x:items-center x:gap-1 x:overflow-hidden x:text-sm x:text-gray-500 x:dark:text-gray-400 x:contrast-more:text-current",children:t}),a[2]=t,a[3]=n):n=a[3],n};function u(e,t,n){let r=n[t+1],l=r?"frontMatter"in e?e.route:e.children[0].route===r.route?"":e.children[0].route:"",s=l?d():"span";return(0,i.jsxs)(o.Fragment,{children:[t>0&&(0,i.jsx)(c.h,{height:"14",className:"x:shrink-0 x:rtl:rotate-180"}),(0,i.jsx)(s,{className:(0,a.A)("x:whitespace-nowrap x:transition-colors",r?"x:min-w-6 x:overflow-hidden x:text-ellipsis":"x:font-medium x:text-gray-700 x:dark:text-gray-100",l&&"x:focus-visible:nextra-focus x:ring-inset x:hover:text-gray-900 x:dark:hover:text-gray-100"),title:e.title,...l&&{href:l},children:e.title})]},e.route+e.name)}var m=n(390),g=n(2063);let v={link:(0,a.A)("x:focus-visible:nextra-focus x:text-gray-600 x:dark:text-gray-400","x:hover:text-gray-800 x:dark:hover:text-gray-200","x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100","x:flex x:max-w-[50%] x:items-center x:gap-1 x:py-4 x:text-base x:font-medium x:transition-colors x:[word-break:break-word] x:md:text-lg"),icon:(0,a.A)("x:inline x:shrink-0")},f=()=>{let e,t,n,o;let l=(0,r.c)(8),{flatDocsDirectories:s,activeIndex:h}=(0,m.useConfig)().normalizePagesResult,{navigation:u}=(0,g.useThemeConfig)(),f=u.prev&&s[h-1],x=u.next&&s[h+1];return(f&&!f.isUnderCurrentDocsTree&&(f=!1),x&&!x.isUnderCurrentDocsTree&&(x=!1),f||x)?(l[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.A)("x:mb-8 x:flex x:items-center x:border-t x:pt-8 nextra-border","x:print:hidden"),l[0]=e):e=l[0],l[1]!==f?(t=f&&(0,i.jsxs)(d(),{href:f.route,title:f.title,className:(0,a.A)(v.link,"x:pe-4"),children:[(0,i.jsx)(c.h,{height:"20",className:(0,a.A)(v.icon,"x:ltr:rotate-180")}),f.title]}),l[1]=f,l[2]=t):t=l[2],l[3]!==x?(n=x&&(0,i.jsxs)(d(),{href:x.route,title:x.title,className:(0,a.A)(v.link,"x:ps-4 x:ms-auto x:text-end"),children:[x.title,(0,i.jsx)(c.h,{height:"20",className:(0,a.A)(v.icon,"x:rtl:rotate-180")})]}),l[3]=x,l[4]=n):n=l[4],l[5]!==t||l[6]!==n?(o=(0,i.jsxs)("div",{className:e,children:[t,n]}),l[5]=t,l[6]=n,l[7]=o):o=l[7],o):null},x=e=>{let t,n,s,d,c,u,v;let x=(0,r.c)(26),{children:p,metadata:b,bottomContent:w}=e,{activeType:E,activeThemeContext:y,activePath:S}=(0,m.useConfig)().normalizePagesResult,I=(0,g.useThemeConfig)(),L=y.timestamp&&b.timestamp;x[0]!==b||x[1]!==y.layout||x[2]!==y.toc?(t=("default"===y.layout||y.toc)&&(0,i.jsx)("nav",{className:"nextra-toc x:order-last x:max-xl:hidden x:w-64 x:shrink-0 x:print:hidden","aria-label":"table of contents",children:y.toc&&(0,i.jsx)(l.TOC,{filePath:b.filePath,pageTitle:b.title})}),x[0]=b,x[1]=y.layout,x[2]=y.toc,x[3]=t):t=x[3];let C="article"===y.typesetting&&"nextra-body-typesetting-article";return x[4]!==C?(n=(0,a.A)("x:w-full x:min-w-0 x:break-words x:min-h-[calc(100vh-var(--nextra-navbar-height))]","x:text-slate-700 x:dark:text-slate-200 x:pb-8 x:px-4 x:pt-4 x:md:px-12",C),x[4]=C,x[5]=n):n=x[5],x[6]!==S||x[7]!==E||x[8]!==y.breadcrumb?(s=y.breadcrumb&&"page"!==E&&(0,i.jsx)(h,{activePath:S}),x[6]=S,x[7]=E,x[8]=y.breadcrumb,x[9]=s):s=x[9],x[10]!==L||x[11]!==I?(d=L?(0,i.jsx)("div",{className:"x:mt-12 x:mb-8 x:text-xs x:text-gray-500 x:text-end x:dark:text-gray-400",children:(0,o.cloneElement)(I.lastUpdated,{date:new Date(L)})}):(0,i.jsx)("div",{className:"x:mt-16"}),x[10]=L,x[11]=I,x[12]=d):d=x[12],x[13]!==E||x[14]!==y.pagination?(c=y.pagination&&"page"!==E&&(0,i.jsx)(f,{}),x[13]=E,x[14]=y.pagination,x[15]=c):c=x[15],x[16]!==w||x[17]!==p||x[18]!==n||x[19]!==s||x[20]!==d||x[21]!==c?(u=(0,i.jsxs)("article",{className:n,children:[s,p,d,c,w]}),x[16]=w,x[17]=p,x[18]=n,x[19]=s,x[20]=d,x[21]=c,x[22]=u):u=x[22],x[23]!==t||x[24]!==u?(v=(0,i.jsxs)(i.Fragment,{children:[t,u]}),x[23]=t,x[24]=u,x[25]=v):v=x[25],v}},9873:(e,t,n)=>{n.d(t,{ImageZoom:()=>P});var i=n(1421),r=n(9815),a=n(825),o=n(8332);let l=(e,t)=>{var n,i;return e===(null==t?void 0:null===(i=t.tagName)||void 0===i?void 0:null===(n=i.toUpperCase)||void 0===n?void 0:n.call(i))},s=e=>l("DIV",e)||l("SPAN",e),d=e=>l("IMG",e),c=e=>e.complete&&0!==e.naturalHeight,h=e=>l("SVG",e),u=e=>{let{height:t,offset:n,width:i}=e;return Math.min((window.innerWidth-2*n)/i,(window.innerHeight-2*n)/t)},m=e=>{let{containerHeight:t,containerWidth:n,offset:i,targetHeight:r,targetWidth:a}=e,o=u({height:r,offset:i,width:a}),l=a>r?a/n:r/t;return o>1?l:o*l},g=e=>{let{containerHeight:t,containerWidth:n,hasScalableSrc:i,offset:r,targetHeight:a,targetWidth:o}=e;return t&&n?!i&&a&&o?m({containerHeight:t,containerWidth:n,offset:r,targetHeight:a,targetWidth:o}):u({height:t,offset:r,width:n}):1},v=/url(?:\(['"]?)(.*?)(?:['"]?\))/,f=e=>{if(e){if(d(e))return e.currentSrc;if(s(e)){let n=window.getComputedStyle(e).backgroundImage;if(n){var t;return null===(t=v.exec(n))||void 0===t?void 0:t[1]}}}},x=e=>{if(e){var t,n;return d(e)?null!==(t=e.alt)&&void 0!==t?t:void 0:null!==(n=e.getAttribute("aria-label"))&&void 0!==n?n:void 0}},p=e=>{let{containerHeight:t,containerLeft:n,containerTop:i,containerWidth:r,hasScalableSrc:a,offset:o,targetHeight:l,targetWidth:s}=e,d=g({containerHeight:t,containerWidth:r,hasScalableSrc:a,offset:o,targetHeight:l,targetWidth:s});return{top:i,left:n,width:r*d,height:t*d,transform:"translate(0,0) scale(".concat(1/d,")")}},b=e=>{let{position:t,relativeNum:n}=e,i=parseFloat(t);return t.endsWith("%")?n*i/100:i},w=e=>{let{containerHeight:t,containerLeft:n,containerTop:i,containerWidth:r,hasScalableSrc:a,objectFit:o,objectPosition:l,offset:s,targetHeight:d,targetWidth:c}=e;if("scale-down"===o&&(o=c<=r&&d<=t?"none":"contain"),"cover"===o||"contain"===o){let e=r/c,h=t/d,u="cover"===o?Math.max(e,h):Math.min(e,h),[m="50%",v="50%"]=l.split(" "),f=b({position:m,relativeNum:r-c*u}),x=b({position:v,relativeNum:t-d*u}),p=g({containerHeight:d*u,containerWidth:c*u,hasScalableSrc:a,offset:s,targetHeight:d,targetWidth:c});return{top:i+x,left:n+f,width:c*u*p,height:d*u*p,transform:"translate(0,0) scale(".concat(1/p,")")}}if("none"===o){let[e="50%",o="50%"]=l.split(" "),h=b({position:e,relativeNum:r-c}),u=b({position:o,relativeNum:t-d}),m=g({containerHeight:d,containerWidth:c,hasScalableSrc:a,offset:s,targetHeight:d,targetWidth:c});return{top:i+u,left:n+h,width:c*m,height:d*m,transform:"translate(0,0) scale(".concat(1/m,")")}}if("fill"!==o)return{};{let e=Math.max(r/c,t/d),n=g({containerHeight:d*e,containerWidth:c*e,hasScalableSrc:a,offset:s,targetHeight:d,targetWidth:c});return{width:r*n,height:t*n,transform:"translate(0,0) scale(".concat(1/n,")")}}},E=e=>{let{backgroundPosition:t,backgroundSize:n,containerHeight:i,containerLeft:r,containerTop:a,containerWidth:o,hasScalableSrc:l,offset:s,targetHeight:d,targetWidth:c}=e;if("cover"===n||"contain"===n){let e=o/c,h=i/d,u="cover"===n?Math.max(e,h):Math.min(e,h),[m="50%",v="50%"]=t.split(" "),f=b({position:m,relativeNum:o-c*u}),x=b({position:v,relativeNum:i-d*u}),p=g({containerHeight:d*u,containerWidth:c*u,hasScalableSrc:l,offset:s,targetHeight:d,targetWidth:c});return{top:a+x,left:r+f,width:c*u*p,height:d*u*p,transform:"translate(0,0) scale(".concat(1/p,")")}}if("auto"===n){let[e="50%",n="50%"]=t.split(" "),h=b({position:e,relativeNum:o-c}),u=b({position:n,relativeNum:i-d}),m=g({containerHeight:d,containerWidth:c,hasScalableSrc:l,offset:s,targetHeight:d,targetWidth:c});return{top:a+u,left:r+h,width:c*m,height:d*m,transform:"translate(0,0) scale(".concat(1/m,")")}}{let[e="50%",h="50%"]=n.split(" "),u=b({position:e,relativeNum:o}),m=Math.min(u/c,b({position:h,relativeNum:i})/d),[v="50%",f="50%"]=t.split(" "),x=b({position:v,relativeNum:o-c*m}),p=b({position:f,relativeNum:i-d*m}),w=g({containerHeight:d*m,containerWidth:c*m,hasScalableSrc:l,offset:s,targetHeight:d,targetWidth:c});return{top:a+p,left:r+x,width:c*m*w,height:d*m*w,transform:"translate(0,0) scale(".concat(1/w,")")}}},y=/\.svg$/i,S=e=>{var t;let{hasZoomImg:n,imgSrc:i,isSvg:r,isZoomed:a,loadedImgEl:o,offset:l,shouldRefresh:d,targetEl:c}=e,h=r||(null==i?void 0:null===(t=i.slice)||void 0===t?void 0:t.call(i,0,18))==="data:image/svg+xml"||n||!!(i&&y.test(i)),u=c.getBoundingClientRect(),m=window.getComputedStyle(c),g=null!=o&&s(c),v=null!=o&&!g,f=p({containerHeight:u.height,containerLeft:u.left,containerTop:u.top,containerWidth:u.width,hasScalableSrc:h,offset:l,targetHeight:(null==o?void 0:o.naturalHeight)||u.height,targetWidth:(null==o?void 0:o.naturalWidth)||u.width}),x=Object.assign({},f,v?w({containerHeight:u.height,containerLeft:u.left,containerTop:u.top,containerWidth:u.width,hasScalableSrc:h,objectFit:m.objectFit,objectPosition:m.objectPosition,offset:l,targetHeight:(null==o?void 0:o.naturalHeight)||u.height,targetWidth:(null==o?void 0:o.naturalWidth)||u.width}):void 0,g?E({backgroundPosition:m.backgroundPosition,backgroundSize:m.backgroundSize,containerHeight:u.height,containerLeft:u.left,containerTop:u.top,containerWidth:u.width,hasScalableSrc:h,offset:l,targetHeight:(null==o?void 0:o.naturalHeight)||u.height,targetWidth:(null==o?void 0:o.naturalWidth)||u.width}):void 0);if(a){let e=window.innerWidth/2,t=window.innerHeight/2,n=parseFloat(String(x.left||0))+parseFloat(String(x.width||0))/2,i=parseFloat(String(x.top||0))+parseFloat(String(x.height||0))/2;d&&(x.transitionDuration="0.01ms"),x.transform="translate(".concat(e-n,"px,").concat(t-i,"px) scale(1)")}return x},I=e=>{if(!e)return{};if(!h(e))return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop};{let t=e.parentElement,n=e.getBoundingClientRect();if(!t)return{height:n.height,left:n.left,width:n.width,top:n.top};{let e=t.getBoundingClientRect();return{height:n.height,left:e.left-n.left,top:e.top-n.top,width:n.width}}}},L=e=>{let t="-zoom",n=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],i=new Map;if(e.hasAttribute("id")){let n=e.id,r=n+t;i.set(n,r),e.id=r}e.querySelectorAll("[id]").forEach(e=>{let n=e.id,r=n+t;i.set(n,r),e.id=r}),i.forEach((t,i)=>{let r="url(#".concat(i,")"),a="url(#".concat(t,")"),o=n.map(e=>"[".concat(e,'="').concat(r,'"]')).join(", ");e.querySelectorAll(o).forEach(e=>{n.forEach(t=>{e.getAttribute(t)===r&&e.setAttribute(t,a)})})}),e.querySelectorAll("style").forEach(e=>{i.forEach((t,n)=>{e.textContent&&(e.textContent=e.textContent.replaceAll("#".concat(n),"#".concat(t)))})})},C=["img","svg",'[role="img"]',"[data-zoom]"].map(e=>"".concat(e,':not([aria-hidden="true"])')).join(","),D={overflow:"",width:""};function T(e){return a.createElement(N,{...e})}class N extends a.Component{render(){let{handleBtnUnzoomClick:e,handleDialogCancel:t,handleDialogClick:n,handleDialogClose:i,handleUnzoom:r,handleZoom:l,imgEl:c,props:{a11yNameButtonUnzoom:u,a11yNameButtonZoom:m,children:g,classDialog:v,IconUnzoom:p,IconZoom:b,isZoomed:w,wrapElement:E,ZoomContent:y,zoomImg:I,zoomMargin:L},refContent:C,refDialog:D,refModalContent:T,refModalImg:N,refWrap:k,state:{id:A,isZoomImgLoaded:z,loadedImgEl:M,modalState:P,shouldRefresh:O,styleGhost:U}}=this,j="rmiz-modal-".concat(A),F="rmiz-modal-img-".concat(A),R=s(c),W=d(c),B=h(c),Y=x(c),_=f(c),G=W?c.sizes:void 0,Z=W?c.srcset:void 0,H=W?c.crossOrigin:void 0,q=!!(null==I?void 0:I.src),V=this.hasImage(),K=Y?"".concat(m,": ").concat(Y):m,X="LOADING"===P||"LOADED"===P,$=V?"found":"not-found",Q="UNLOADED"===P||"UNLOADING"===P?"hidden":"visible";this.styleModalImg=V?S({hasZoomImg:q,imgSrc:_,isSvg:B,isZoomed:w&&X,loadedImgEl:M,offset:L,shouldRefresh:O,targetEl:c}):{};let J=null;if(V){let t=W||R?a.createElement("img",{alt:Y,crossOrigin:H,sizes:G,src:_,srcSet:Z,...z&&"LOADED"===P?I:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:F,ref:N,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):B?a.createElement("div",{"data-rmiz-modal-img":!0,ref:N,style:this.styleModalImg}):null,n=a.createElement("button",{"aria-label":u,"data-rmiz-btn-unzoom":"",onClick:e,type:"button"},a.createElement(p,null));J=y?a.createElement(y,{buttonUnzoom:n,modalState:P,img:t,onUnzoom:r}):a.createElement(a.Fragment,null,t,n)}return a.createElement(E,{"aria-owns":j,"data-rmiz":"",ref:k},a.createElement(E,{"data-rmiz-content":$,ref:C,style:{visibility:"UNLOADED"===P?"visible":"hidden"}},g),V&&a.createElement(E,{"data-rmiz-ghost":"",style:U},a.createElement("button",{"aria-label":K,"data-rmiz-btn-zoom":"",onClick:l,type:"button"},a.createElement(b,null))),V&&o.createPortal(a.createElement("dialog",{"aria-labelledby":F,"aria-modal":"true",className:v,"data-rmiz-modal":"",id:j,onClick:n,onClose:i,onCancel:t,ref:D,role:"dialog"},a.createElement("div",{"data-rmiz-modal-overlay":Q}),a.createElement("div",{"data-rmiz-modal-content":"",ref:T},J)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){var e,t,n,i,r,a,o,l,s,d,c,h;"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),null===(t=this.contentChangeObserver)||void 0===t||null===(e=t.disconnect)||void 0===e||e.call(t),null===(i=this.contentNotFoundChangeObserver)||void 0===i||null===(n=i.disconnect)||void 0===n||n.call(i),null===(a=this.imgElResizeObserver)||void 0===a||null===(r=a.disconnect)||void 0===r||r.call(a),null===(l=this.imgEl)||void 0===l||null===(o=l.removeEventListener)||void 0===o||o.call(l,"load",this.handleImgLoad),null===(d=this.imgEl)||void 0===d||null===(s=d.removeEventListener)||void 0===s||s.call(d,"click",this.handleZoom),null===(h=this.refModalImg.current)||void 0===h||null===(c=h.removeEventListener)||void 0===c||c.call(h,"transitionend",this.handleImgTransitionEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e,t){this.handleModalStateChange(t.modalState),this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=a.createRef(),this.refDialog=a.createRef(),this.refModalContent=a.createRef(),this.refModalImg=a.createRef(),this.refWrap=a.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=D,this.styleModalImg={},this.handleModalStateChange=e=>{let{modalState:t}=this.state;if("LOADING"!==e&&"LOADING"===t)this.loadZoomImg(),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0);else if("LOADED"!==e&&"LOADED"===t)window.addEventListener("wheel",this.handleWheel,{passive:!0});else if("UNLOADING"!==e&&"UNLOADING"===t)this.ensureImgTransitionEnd(),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0);else if("UNLOADED"!==e&&"UNLOADED"===t){var n,i,r,a;this.bodyScrollEnable(),window.removeEventListener("resize",this.handleResize),null===(i=this.refModalImg.current)||void 0===i||null===(n=i.removeEventListener)||void 0===n||n.call(i,"transitionend",this.handleImgTransitionEnd),null===(a=this.refDialog.current)||void 0===a||null===(r=a.close)||void 0===r||r.call(a)}},this.getDialogContainer=()=>{let e=document.querySelector("[data-rmiz-portal]");return null==e&&((e=document.createElement("div")).setAttribute("data-rmiz-portal",""),document.body.appendChild(e)),e},this.setId=()=>{let e=()=>Math.random().toString(16).slice(-4);this.setState({id:e()+e()+e()})},this.setAndTrackImg=()=>{let e=this.refContent.current;if(e){if(this.imgEl=e.querySelector(C),this.imgEl){var t,n;null===(n=this.contentNotFoundChangeObserver)||void 0===n||null===(t=n.disconnect)||void 0===t||t.call(n),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver(e=>{let t=e[0];(null==t?void 0:t.target)&&(this.imgEl=t.target,this.setState({styleGhost:I(this.imgEl)}))}),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver(()=>{this.setState({styleGhost:I(this.imgEl)})}),this.contentChangeObserver.observe(e,{attributes:!0,childList:!0,subtree:!0}))}else this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(e,{childList:!0,subtree:!0}))}},this.handleIfZoomChanged=e=>{let{isZoomed:t}=this.props;!e&&t?this.zoom():e&&!t&&this.unzoom()},this.handleImgLoad=()=>{let e=f(this.imgEl);if(!e)return;let t=new Image;d(this.imgEl)&&(t.sizes=this.imgEl.sizes,t.srcset=this.imgEl.srcset,t.crossOrigin=this.imgEl.crossOrigin),t.src=e;let n=()=>{this.setState({loadedImgEl:t,styleGhost:I(this.imgEl)})};t.decode().then(n).catch(()=>{if(c(t)){n();return}t.onload=n})},this.handleZoom=()=>{if(this.hasImage()){var e,t;null===(e=(t=this.props).onZoomChange)||void 0===e||e.call(t,!0)}},this.handleUnzoom=()=>{var e,t;null===(e=(t=this.props).onZoomChange)||void 0===e||e.call(t,!1)},this.handleBtnUnzoomClick=e=>{e.preventDefault(),e.stopPropagation(),this.handleUnzoom()},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{(e.target===this.refModalContent.current||e.target===this.refModalImg.current)&&(e.stopPropagation(),this.handleUnzoom())},this.handleDialogClose=e=>{e.stopPropagation(),this.handleUnzoom()},this.handleKeyDown=e=>{("Escape"===e.key||27===e.keyCode)&&(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=e=>{if(e.touches.length>1){this.isScaling=!0;return}1===e.changedTouches.length&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{var t,n;let i=null!==(n=null===(t=window.visualViewport)||void 0===t?void 0:t.scale)&&void 0!==n?n:1;this.props.canSwipeToUnzoom&&!this.isScaling&&i<=1&&null!=this.touchYStart&&e.changedTouches[0]&&(this.touchYEnd=e.changedTouches[0].screenY,Math.abs(Math.max(this.touchYStart,this.touchYEnd)-Math.min(this.touchYStart,this.touchYEnd))>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom()))},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||h(this.imgEl))&&"none"!==window.getComputedStyle(this.imgEl).display,this.zoom=()=>{var e,t,n,i;this.bodyScrollDisable(),null===(t=this.refDialog.current)||void 0===t||null===(e=t.showModal)||void 0===e||e.call(t),null===(i=this.refModalImg.current)||void 0===i||null===(n=i.addEventListener)||void 0===n||n.call(i,"transitionend",this.handleImgTransitionEnd),this.setState({modalState:"LOADING"})},this.unzoom=()=>{this.setState({modalState:"UNLOADING"})},this.handleImgTransitionEnd=()=>{clearTimeout(this.timeoutTransitionEnd),"LOADING"===this.state.modalState?this.setState({modalState:"LOADED"}):"UNLOADING"===this.state.modalState&&this.setState({shouldRefresh:!1,modalState:"UNLOADED"})},this.ensureImgTransitionEnd=()=>{if(this.refModalImg.current){let e=window.getComputedStyle(this.refModalImg.current).transitionDuration,t=parseFloat(e);if(t){let n=t*(e.endsWith("ms")?1:1e3)+50;this.timeoutTransitionEnd=setTimeout(this.handleImgTransitionEnd,n)}}},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};let e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width="".concat(e,"px")},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=D},this.loadZoomImg=()=>{let{props:{zoomImg:e}}=this,t=null==e?void 0:e.src;if(t){var n,i,r;let a=new Image;a.sizes=null!==(n=null==e?void 0:e.sizes)&&void 0!==n?n:"",a.srcset=null!==(i=null==e?void 0:e.srcSet)&&void 0!==i?i:"",a.crossOrigin=null!==(r=null==e?void 0:e.crossOrigin)&&void 0!==r?r:void 0,a.src=t;let o=()=>{this.setState({isZoomImgLoaded:!0})};a.decode().then(o).catch(()=>{if(c(a)){o();return}a.onload=o})}},this.UNSAFE_handleSvg=()=>{let{imgEl:e,refModalImg:t,styleModalImg:n}=this;if(h(e)){var i,r,a,o,l;let s=e.cloneNode(!0);L(s),s.style.width="".concat(n.width||0,"px"),s.style.height="".concat(n.height||0,"px"),s.addEventListener("click",this.handleUnzoom),null===(a=t.current)||void 0===a||null===(r=a.firstChild)||void 0===r||null===(i=r.remove)||void 0===i||i.call(r),null===(l=t.current)||void 0===l||null===(o=l.appendChild)||void 0===o||o.call(l,s)}}}}function k(e){let[t,n]=a.useState(!1);return a.createElement(T,{...e,isZoomed:t,onZoomChange:n})}N.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:function(){return a.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return a.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};var A=n(7841),z=n.n(A);let M=(0,a.forwardRef)((e,t)=>{let n;let a=(0,r.c)(6),o="object"==typeof e.src?z():"img";return a[2]!==o||a[3]!==e||a[4]!==t?(n=(0,i.jsx)(o,{...e,ref:t,"data-pagefind-index-attrs":"title,alt"}),a[2]=o,a[3]=e,a[4]=t,a[5]=n):n=a[5],n});M.displayName="Image";let P=e=>{let t,n,o,l,s,d;let c=(0,r.c)(12),h=(0,a.useRef)(null),[u,m]=(0,a.useState)(!1);c[0]===Symbol.for("react.memo_cache_sentinel")?(t=()=>{m(null!==h.current.closest("a"))},n=[],c[0]=t,c[1]=n):(t=c[0],n=c[1]),(0,a.useEffect)(t,n),c[2]!==e?(o=(0,i.jsx)(M,{...e,ref:h}),c[2]=e,c[3]=o):o=c[3];let g=o;return u?g:(c[4]!==e.src?(l=function(e){return"string"==typeof e?e:"default"in e?e.default.src:e.src}(e.src),c[4]=e.src,c[5]=l):l=c[5],c[6]!==e.alt||c[7]!==l?(s={src:l,alt:e.alt},c[6]=e.alt,c[7]=l,c[8]=s):s=c[8],c[9]!==g||c[10]!==s?(d=(0,i.jsx)(k,{zoomMargin:40,zoomImg:s,wrapElement:"span",children:g}),c[9]=g,c[10]=s,c[11]=d):d=c[11],d)}}}]);