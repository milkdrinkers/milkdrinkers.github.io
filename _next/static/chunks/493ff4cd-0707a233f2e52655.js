"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{6140:(e,t,n)=>{n.d(t,{Zx:()=>G,bv:()=>Y,vW:()=>$,we:()=>B});var r,l=n(2939),u=n(517),o=n(5322),i=n(4348),c=n(8922),f=n(8970),s=n(44);let a={...r||(r=n.t(l,2))},d=a.useInsertionEffect||(e=>e());function m(e){let t=l.useRef(()=>{});return d(()=>{t.current=e}),l.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}let g="ArrowUp",h="ArrowDown",v="ArrowLeft",p="ArrowRight";function b(e,t){let{startingIndex:n=-1,decrement:r=!1,disabledIndices:l,amount:u=1}=void 0===t?{}:t,o=e.current,i=n;do i+=r?-u:u;while(i>=0&&i<=o.length-1&&function(e,t,n){if(n)return n.includes(t);let r=e[t];return null==r||r.hasAttribute("disabled")||"true"===r.getAttribute("aria-disabled")}(o,i,l));return i}var w="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;()=>{},()=>{};let C=!1,y=0,R=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+y++,x=a.useId||function(){let[e,t]=l.useState(()=>C?R():void 0);return w(()=>{null==e&&t(R())},[]),l.useEffect(()=>{C=!0},[]),e},M=l.createContext(null),T=l.createContext(null),k=()=>{var e;return(null==(e=l.useContext(M))?void 0:e.id)||null},E=()=>l.useContext(T),S=()=>{},H=l.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:S,setState:S,isInstantPhase:!1}),_=0,A=new WeakMap,I=new WeakSet,q={},O=0,D=e=>e&&(e.host||D(e.parentNode)),L=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=D(t);return e.contains(n)?n:null}).filter(e=>null!=e),W=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function z(e,t){let n=tabbable(e,W());"prev"===t&&n.reverse();let r=n.indexOf(activeElement(getDocument(e)));return n.slice(r+1)[0]}let N="data-floating-ui-focusable",j=null;function B(e){void 0===e&&(e={});let{nodeId:t}=e,n=function(e){let{open:t=!1,onOpenChange:n,elements:r}=e,u=x(),o=l.useRef({}),[i]=l.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})()),c=null!=k(),[f,s]=l.useState(r.reference),a=m((e,t,r)=>{o.current.openEvent=e?t:void 0,i.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)}),d=l.useMemo(()=>({setPositionReference:s}),[]),g=l.useMemo(()=>({reference:f||r.reference||null,floating:r.floating||null,domReference:r.reference}),[f,r.reference,r.floating]);return l.useMemo(()=>({dataRef:o,open:t,onOpenChange:a,elements:g,events:i,floatingId:u,refs:d}),[t,a,g,i,u,d])}({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,u=r.elements,[o,c]=l.useState(null),[s,a]=l.useState(null),d=(null==u?void 0:u.domReference)||o,g=l.useRef(null),h=E();w(()=>{d&&(g.current=d)},[d]);let v=(0,f.we)({...e,elements:{...u,...s&&{reference:s}}}),p=l.useCallback(e=>{let t=(0,i.vq)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;a(t),v.refs.setReference(t)},[v.refs]),b=l.useCallback(e=>{((0,i.vq)(e)||null===e)&&(g.current=e,c(e)),((0,i.vq)(v.refs.reference.current)||null===v.refs.reference.current||null!==e&&!(0,i.vq)(e))&&v.refs.setReference(e)},[v.refs]),C=l.useMemo(()=>({...v.refs,setReference:b,setPositionReference:p,domReference:g}),[v.refs,b,p]),y=l.useMemo(()=>({...v.elements,domReference:d}),[v.elements,d]),R=l.useMemo(()=>({...v,...r,refs:C,elements:y,nodeId:t}),[v,C,y,t,r]);return w(()=>{r.dataRef.current.floatingContext=R;let e=null==h?void 0:h.nodesRef.current.find(e=>e.id===t);e&&(e.context=R)}),l.useMemo(()=>({...v,context:R,refs:C,elements:y}),[v,C,y,R])}let F="active",K="selected";function P(e,t,n){let r=new Map,l="item"===n,u=e;if(l&&e){let{[F]:t,[K]:n,...r}=e;u=r}return{..."floating"===n&&{tabIndex:-1,[N]:""},...u,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,u]=t;if(!(l&&[F,K].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof u){var o;null==(o=r.get(n))||o.push(u),e[n]=function(){for(var e,t=arguments.length,l=Array(t),u=0;u<t;u++)l[u]=arguments[u];return null==(e=r.get(n))?void 0:e.map(e=>e(...l)).find(e=>void 0!==e)}}}else e[n]=u}}),e),{})}}function Y(e){void 0===e&&(e=[]);let t=e.map(e=>null==e?void 0:e.reference),n=e.map(e=>null==e?void 0:e.floating),r=e.map(e=>null==e?void 0:e.item),u=l.useCallback(t=>P(t,e,"reference"),t),o=l.useCallback(t=>P(t,e,"floating"),n),i=l.useCallback(t=>P(t,e,"item"),r);return l.useMemo(()=>({getReferenceProps:u,getFloatingProps:o,getItemProps:i}),[u,o,i])}function U(e,t,n){switch(e){case"vertical":return t;case"horizontal":return n;default:return t||n}}function Z(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}let $=e=>({name:"inner",options:e,async fn(t){let{listRef:n,overflowRef:r,onFallbackChange:l,offset:u=0,index:i=0,minItemsVisible:a=4,referenceOverflowThreshold:d=0,scrollRef:m,...g}=(0,o._3)(e,t),{rects:h,elements:{floating:v}}=t,p=n.current[i],b=(null==m?void 0:m.current)||v,w=v.clientTop||b.clientTop,C=0!==v.clientTop,y=0!==b.clientTop,R=v===b;if(!p)return{};let x={...t,...await (0,f.cY)(-p.offsetTop-v.clientTop-h.reference.height/2-p.offsetHeight/2-u).fn(t)},M=await (0,s.__)(Z(x,b.scrollHeight+w+v.clientTop),g),T=await (0,s.__)(x,{...g,elementContext:"reference"}),k=(0,o.T9)(0,M.top),E=x.y+k,S=(b.scrollHeight>b.clientHeight?e=>e:o.LI)((0,o.T9)(0,b.scrollHeight+(C&&R||y?2*w:0)-k-(0,o.T9)(0,M.bottom)));if(b.style.maxHeight=S+"px",b.scrollTop=k,l){let e=b.offsetHeight<p.offsetHeight*(0,o.jk)(a,n.current.length)-1||T.top>=-d||T.bottom>=-d;c.flushSync(()=>l(e))}return r&&(r.current=await (0,s.__)(Z({...x,y:E},b.offsetHeight+w+v.clientTop),g)),{y:E}}});function G(e,t){let{open:n,elements:r}=e,{enabled:o=!0,overflowRef:i,scrollRef:f,onChange:s}=t,a=m(s),d=l.useRef(!1),g=l.useRef(null),h=l.useRef(null);l.useEffect(()=>{if(!o)return;function e(e){if(e.ctrlKey||!t||null==i.current)return;let n=e.deltaY,r=i.current.top>=-.5,l=i.current.bottom>=-.5,o=t.scrollHeight-t.clientHeight,f=n<0?-1:1,s=n<0?"max":"min";!(t.scrollHeight<=t.clientHeight)&&(!r&&n>0||!l&&n<0?(e.preventDefault(),c.flushSync(()=>{a(e=>e+Math[s](n,o*f))})):/firefox/i.test((0,u.$t)())&&(t.scrollTop+=n))}let t=(null==f?void 0:f.current)||r.floating;if(n&&t)return t.addEventListener("wheel",e),requestAnimationFrame(()=>{g.current=t.scrollTop,null!=i.current&&(h.current={...i.current})}),()=>{g.current=null,h.current=null,t.removeEventListener("wheel",e)}},[o,n,r.floating,i,f,a]);let v=l.useMemo(()=>({onKeyDown(){d.current=!0},onWheel(){d.current=!1},onPointerMove(){d.current=!1},onScroll(){let e=(null==f?void 0:f.current)||r.floating;if(i.current&&e&&d.current){if(null!==g.current){let t=e.scrollTop-g.current;(i.current.bottom<-.5&&t<-1||i.current.top<-.5&&t>1)&&c.flushSync(()=>a(e=>e+t))}requestAnimationFrame(()=>{g.current=e.scrollTop})}}}),[r.floating,a,i,f]);return l.useMemo(()=>o?{floating:v}:{},[o,v])}}}]);