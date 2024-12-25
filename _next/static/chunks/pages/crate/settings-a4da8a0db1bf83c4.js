(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{8037:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/crate/settings",function(){return a(3248)}])},3248:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,useTOC:()=>d});var i=a(6070),r=a(6585),n=a(5431),l=a(3451),s=a(1133);function d(e){let t={a:"a",...(0,l.R)()};return[{value:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.a,{href:"https://javadoc.jitpack.io/com/github/milkdrinkers/crate/latest/javadoc/com/github/milkdrinkers/Crate/internal/settings/package-summary.html",children:"Settings"})}),id:"settings",depth:2},{value:"DataType",id:"datatype",depth:3},{value:"DataType.UNSORTED",id:"datatypeunsorted",depth:4},{value:"DataType.SORTED",id:"datatypesorted",depth:4},{value:"ReloadSetting",id:"reloadsetting",depth:3},{value:"ReloadSetting.INTELLIGENT",id:"reloadsettingintelligent",depth:4},{value:"ReloadSetting.AUTOMATIC",id:"reloadsettingautomatic",depth:4},{value:"ReloadSetting.MANUAL",id:"reloadsettingmanual",depth:4},{value:"ConfigSetting",id:"configsetting",depth:3},{value:"ConfigSetting.SKIP_COMMENTS",id:"configsettingskip_comments",depth:4},{value:"ConfigSetting.PRESERVE_COMMENTS",id:"configsettingpreserve_comments",depth:4}]}let o=(0,r.e)(function(e){let{toc:t=d(e)}=e,a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{children:"File Settings"}),"\n",(0,i.jsx)(a.h2,{id:t[0].id,children:t[0].value}),"\n",(0,i.jsx)(a.p,{children:"Crate File instances have multiple settings. Here they are explained in finer detail."}),"\n",(0,i.jsx)(a.h3,{id:t[1].id,children:t[1].value}),"\n",(0,i.jsx)(a.h4,{id:t[2].id,children:t[2].value}),"\n",(0,i.jsx)(s.P,{type:"info",children:(0,i.jsxs)(a.p,{children:["This is the default value if ",(0,i.jsx)(a.code,{children:"ConfigSetting"})," is ",(0,i.jsx)(a.code,{children:"SKIP_COMMENTS"})]})}),"\n",(0,i.jsx)(a.p,{children:"Is unsorted, using less RAM. Meaning, when writing back to the File it might mess up the arrangement and the sequence (it wont make the file unreadable, just the Style might be messed up and comments shifted around).\nThis type is best suited for read-only files or when storing data."}),"\n",(0,i.jsx)(a.h4,{id:t[3].id,children:t[3].value}),"\n",(0,i.jsx)(s.P,{type:"info",children:(0,i.jsxs)(a.p,{children:["This is the default value if ",(0,i.jsx)(a.code,{children:"ConfigSetting"})," is ",(0,i.jsx)(a.code,{children:"PRESERVE_COMMENTS"})]})}),"\n",(0,i.jsx)(a.p,{children:"Is internally sorted, using more RAM. When writing back to the File, entry sequence is preserved.\nThis type is best suited for files that are written to by the program that also need to keep their internal structure. (Like a config file with comments.)"}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h3,{id:t[4].id,children:t[4].value}),"\n",(0,i.jsx)(a.h4,{id:t[5].id,children:t[5].value}),"\n",(0,i.jsx)(s.P,{type:"info",children:(0,i.jsx)(a.p,{children:"This is the default value"})}),"\n",(0,i.jsx)(a.p,{children:"The FileData will only be reloaded when the FileContents have changed since the last access."}),"\n",(0,i.jsx)(a.h4,{id:t[6].id,children:t[6].value}),"\n",(0,i.jsx)(a.p,{children:"The FileData will be reloaded everytime you access the File."}),"\n",(0,i.jsx)(a.h4,{id:t[7].id,children:t[7].value}),"\n",(0,i.jsxs)(a.p,{children:["The FileData will only be reloaded, when you call the ",(0,i.jsx)(a.code,{children:"forceReload()"})," method."]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h3,{id:t[8].id,children:t[8].value}),"\n",(0,i.jsx)(a.h4,{id:t[9].id,children:t[9].value}),"\n",(0,i.jsx)(s.P,{type:"info",children:(0,i.jsx)(a.p,{children:"This is the default value"})}),"\n",(0,i.jsx)(a.p,{children:"Any comments will be stripped."}),"\n",(0,i.jsx)(a.h4,{id:t[10].id,children:t[10].value}),"\n",(0,i.jsx)(a.p,{children:"Any comments will be preserved."})]})},"/crate/settings",{filePath:"pages/crate/settings.mdx",timestamp:1735085318e3,pageMap:n.O,frontMatter:{},title:"File Settings"},"undefined"==typeof RemoteContent?d:RemoteContent.useTOC)},1133:(e,t,a)=>{"use strict";a.d(t,{P:()=>d});var i=a(6070),r=a(3526),n=a(1809);let l={default:"\uD83D\uDCA1",error:"\uD83D\uDEAB",info:(0,i.jsx)(n.KS,{className:"_mt-1"}),warning:"⚠️"},s={default:(0,r.A)("_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300"),error:(0,r.A)("_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200"),info:(0,r.A)("_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200"),warning:(0,r.A)("_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200")};function d({children:e,type:t="default",emoji:a=l[t]}){return(0,i.jsxs)("div",{className:(0,r.A)("nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4","contrast-more:_border-current contrast-more:dark:_border-current",s[t]),children:[(0,i.jsx)("div",{className:"_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:a}),(0,i.jsx)("div",{className:"_w-full _min-w-0 _leading-7",children:e})]})}},5431:(e,t,a)=>{"use strict";a.d(t,{O:()=>i});let i=[{data:{index:{title:"Welcome",type:"page",display:"hidden",theme:{breadcrumb:!0,sidebar:!0,footer:!0}},colorparser:{title:"ColorParser",type:"page"},crate:{title:"Crate",type:"page"},about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://github.com/milkdrinkers/milkdrinkers.github.io",newWindow:!0},404:{title:"404",type:"page",display:"hidden",theme:{typesetting:"article"}}}},{name:"404",route:"/404",frontMatter:{sidebarTitle:"404"}},{name:"about",route:"/about",frontMatter:{sidebarTitle:"About"}},{name:"colorparser",route:"/colorparser",children:[{data:{"-- getting-started":{type:"separator",title:"Getting Started"},index:"Introduction",installation:"Installation","-- usage":{type:"separator",title:"Usage"},usage:"Usage"}},{name:"index",route:"/colorparser",frontMatter:{sidebarTitle:"Index"}},{name:"installation",route:"/colorparser/installation",frontMatter:{sidebarTitle:"Installation"}},{name:"usage",route:"/colorparser/usage",frontMatter:{sidebarTitle:"Usage"}}]},{name:"crate",route:"/crate",children:[{data:{"-- getting-started":{type:"separator",title:"Getting Started"},index:"Introduction",installation:"Installation",file_formats:"File Formats",settings:"File Settings","-- usage":{type:"separator",title:"Usage"},basic_usage:"Basic Usage",advanced:"Advanced Usage"}},{name:"advanced",route:"/crate/advanced",frontMatter:{sidebarTitle:"Advanced"}},{name:"basic_usage",route:"/crate/basic_usage",frontMatter:{sidebarTitle:"Basic Usage"}},{name:"file_formats",route:"/crate/file_formats",frontMatter:{sidebarTitle:"File Formats"}},{name:"index",route:"/crate",frontMatter:{sidebarTitle:"Index"}},{name:"installation",route:"/crate/installation",frontMatter:{sidebarTitle:"Installation"}},{name:"settings",route:"/crate/settings",frontMatter:{sidebarTitle:"Settings"}}]},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}}]}},e=>{var t=t=>e(e.s=t);e.O(0,[585,636,593,792],()=>t(8037)),_N_E=e.O()}]);