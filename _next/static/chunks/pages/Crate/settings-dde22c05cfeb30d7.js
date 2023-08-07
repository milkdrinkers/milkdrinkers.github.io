(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{7152:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Crate/settings",function(){return i(4804)}])},967:function(e,t,i){"use strict";var n=i(1527);i(959);let a={logo:(0,n.jsx)("span",{children:"Milkdrinkers"}),project:{link:"https://github.com/milkdrinkers"},chat:{link:"https://discord.athyrium.eu"},docsRepositoryBase:"https://github.com/milkdrinkers/milkdrinkers.github.io",footer:{text:"Milkdrinkers"}};t.Z=a},4804:function(e,t,i){"use strict";i.r(t);var n=i(1527),a=i(8750),s=i(1159),d=i(967);i(3792);var r=i(6736);i(5408);var o=i(9351);let l={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/Crate/settings.mdx",route:"/Crate/settings",headings:[{depth:1,value:"File Settings",id:"file-settings"},{depth:2,value:"Settings",id:"settings"},{depth:3,value:"DataType",id:"datatype"},{depth:4,value:"DataType.UNSORTED",id:"datatypeunsorted"},{depth:4,value:"DataType.SORTED",id:"datatypesorted"},{depth:3,value:"ReloadSetting",id:"reloadsetting"},{depth:4,value:"ReloadSetting.INTELLIGENT",id:"reloadsettingintelligent"},{depth:4,value:"ReloadSetting.AUTOMATIC",id:"reloadsettingautomatic"},{depth:4,value:"ReloadSetting.MANUAL",id:"reloadsettingmanual"},{depth:3,value:"ConfigSetting",id:"configsetting"},{depth:4,value:"ConfigSetting.SKIP_COMMENTS",id:"configsettingskip_comments"},{depth:4,value:"ConfigSetting.PRESERVE_COMMENTS",id:"configsettingpreserve_comments"}],pageMap:[{kind:"Folder",name:"ColorParser",route:"/ColorParser",children:[{kind:"Meta",data:{introduction:"Introduction",installation:"Installation",usage:"Usage"}},{kind:"MdxPage",name:"installation",route:"/ColorParser/installation"},{kind:"MdxPage",name:"introduction",route:"/ColorParser/introduction"},{kind:"MdxPage",name:"usage",route:"/ColorParser/usage"}]},{kind:"Folder",name:"Crate",route:"/Crate",children:[{kind:"Meta",data:{introduction:"Introduction",installation:"Installation",file_formats:"File Formats",settings:"File Settings",basic_usage:"Basic Usage",advanced:"Advanced Usage"}},{kind:"MdxPage",name:"advanced",route:"/Crate/advanced"},{kind:"MdxPage",name:"basic_usage",route:"/Crate/basic_usage"},{kind:"MdxPage",name:"file_formats",route:"/Crate/file_formats"},{kind:"MdxPage",name:"installation",route:"/Crate/installation"},{kind:"MdxPage",name:"introduction",route:"/Crate/introduction"},{kind:"MdxPage",name:"settings",route:"/Crate/settings"}]},{kind:"Meta",data:{index:"Introduction",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://github.com/milkdrinkers/milkdrinkers.github.io",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"File Settings"},pageNextRoute:"/Crate/settings",nextraLayout:s.ZP,themeConfig:d.Z};function h(e){let t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",h3:"h3",h4:"h4",code:"code",hr:"hr"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"File Settings"}),"\n",(0,n.jsx)(t.h2,{id:"settings",children:(0,n.jsx)(t.a,{href:"https://javadoc.jitpack.io/com/github/milkdrinkers/crate/latest/javadoc/com/github/milkdrinkers/Crate/internal/settings/package-summary.html",children:"Settings"})}),"\n",(0,n.jsx)(t.p,{children:"Crate File instances have multiple settings. Here they are explained in finer detail."}),"\n",(0,n.jsx)(t.h3,{id:"datatype",children:"DataType"}),"\n",(0,n.jsx)(t.h4,{id:"datatypeunsorted",children:"DataType.UNSORTED"}),"\n",(0,n.jsx)(o.UW,{type:"info",children:(0,n.jsxs)(t.p,{children:["This is the default value if ",(0,n.jsx)(t.code,{children:"ConfigSetting"})," is ",(0,n.jsx)(t.code,{children:"SKIP_COMMENTS"})]})}),"\n",(0,n.jsx)(t.p,{children:"Is unsorted, using less RAM. Meaning, when writing back to the File it might mess up the arrangement and the sequence (it wont make the file unreadable, just the Style might be messed up and comments shifted around).\nThis type is best suited for read-only files or when storing data."}),"\n",(0,n.jsx)(t.h4,{id:"datatypesorted",children:"DataType.SORTED"}),"\n",(0,n.jsx)(o.UW,{type:"info",children:(0,n.jsxs)(t.p,{children:["This is the default value if ",(0,n.jsx)(t.code,{children:"ConfigSetting"})," is ",(0,n.jsx)(t.code,{children:"PRESERVE_COMMENTS"})]})}),"\n",(0,n.jsx)(t.p,{children:"Is internally sorted, using more RAM. When writing back to the File, entry sequence is preserved.\nThis type is best suited for files that are written to by the program that also need to keep their internal structure. (Like a config file with comments.)"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"reloadsetting",children:"ReloadSetting"}),"\n",(0,n.jsx)(t.h4,{id:"reloadsettingintelligent",children:"ReloadSetting.INTELLIGENT"}),"\n",(0,n.jsx)(o.UW,{type:"info",children:(0,n.jsx)(t.p,{children:"This is the default value"})}),"\n",(0,n.jsx)(t.p,{children:"The FileData will only be reloaded when the FileContents have changed since the last access."}),"\n",(0,n.jsx)(t.h4,{id:"reloadsettingautomatic",children:"ReloadSetting.AUTOMATIC"}),"\n",(0,n.jsx)(t.p,{children:"The FileData will be reloaded everytime you access the File."}),"\n",(0,n.jsx)(t.h4,{id:"reloadsettingmanual",children:"ReloadSetting.MANUAL"}),"\n",(0,n.jsxs)(t.p,{children:["The FileData will only be reloaded, when you call the ",(0,n.jsx)(t.code,{children:"forceReload()"})," method."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"configsetting",children:"ConfigSetting"}),"\n",(0,n.jsx)(t.h4,{id:"configsettingskip_comments",children:"ConfigSetting.SKIP_COMMENTS"}),"\n",(0,n.jsx)(o.UW,{type:"info",children:(0,n.jsx)(t.p,{children:"This is the default value"})}),"\n",(0,n.jsx)(t.p,{children:"Any comments will be stripped."}),"\n",(0,n.jsx)(t.h4,{id:"configsettingpreserve_comments",children:"ConfigSetting.PRESERVE_COMMENTS"}),"\n",(0,n.jsx)(t.p,{children:"Any comments will be preserved."})]})}t.default=(0,a.j)(l)}},function(e){e.O(0,[774,646,888,179],function(){return e(e.s=7152)}),_N_E=e.O()}]);