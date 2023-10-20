(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{2132:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ColorParser/usage",function(){return n(8741)}])},8741:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return c}});var l=n(1527),a=n(7154),r=n(2468),o=n(8471);n(8525);var i=n(5424),t=n(8815);let c=[{depth:2,value:"Simple Example",id:"simple-example"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"parseMinimessagePlaceholder",id:"parseminimessageplaceholder"},{depth:3,value:"parseLegacy",id:"parselegacy"},{depth:3,value:"parsePAPIPlaceholders",id:"parsepapiplaceholders"},{depth:2,value:"Examples",id:"examples"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",em:"em",pre:"pre",span:"span",h3:"h3"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Basic Usage"}),"\n",(0,l.jsxs)(s.p,{children:["Don't forget to check out the ",(0,l.jsx)(s.a,{href:"https://docs.advntr.dev/minimessage/format.html",children:"MiniMessage Documentation"})," so you can style messages to their full potential!"]}),"\n",(0,l.jsx)(s.h2,{id:"simple-example",children:"Simple Example"}),"\n",(0,l.jsx)(t.UW,{emoji:"",children:(0,l.jsxs)(s.p,{children:["A ",(0,l.jsx)(s.code,{children:"ColorParser"})," is always instantiated with the ",(0,l.jsx)(s.code,{children:"ColorParser#of(String str)"})," method. The string is only serialized into a ",(0,l.jsx)(s.code,{children:"Component"})," when ",(0,l.jsx)(s.code,{children:"ColorParser#build()"})," is executed (",(0,l.jsxs)(s.em,{children:["Which returns the ",(0,l.jsx)(s.code,{children:"Component"})]}),")."]})}),"\n",(0,l.jsx)(s.p,{children:"This is the simplest example of serializing a MiniMessage string into a Component."}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<green>Teleported to you."'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})})}),"\n",(0,l.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(s.h3,{id:"parseminimessageplaceholder",children:"parseMinimessagePlaceholder"}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"parseMinimessagePlaceholder()"})," method allows you to dynamically replace custom tags with a ",(0,l.jsx)(s.code,{children:"String"})," or any ",(0,l.jsx)(s.code,{children:"ComponentLike"})," value."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<green><player> Teleported to you."'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parseMinimessagePlaceholder"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"player"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getName"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Replace <player> with the players username"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,l.jsx)(s.h3,{id:"parselegacy",children:"parseLegacy"}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"parseLegacy()"})," method replaces all old color & style tags with their MiniMessage equivalents."]}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"&6So<green>me \xa75String &4Here"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parseLegacy"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// You only need to run this once to replace all legacy formatting codes"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,l.jsx)(s.h3,{id:"parsepapiplaceholders",children:"parsePAPIPlaceholders"}),"\n",(0,l.jsx)(t.UW,{type:"info",children:(0,l.jsx)(s.p,{children:"If PAPI isn't installed on the server this method does nothing."})}),"\n",(0,l.jsx)(s.p,{children:"You can use this method to parse PlaceholderAPI placeholders."}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Component"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" message "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Your Displayname is: %player_displayname%"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parsePAPIPlaceholders"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(message);"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(s.p,{children:"Custom message color and hover message."}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"\"<#00ff00><hover:show_text:'<red>test'>R G B!\""}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,l.jsx)(s.p,{children:"Add as many placeholders as you'd like, and have backwards compatibility!"}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"<green><player1> Teleported &6to <player2>."'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parseMinimessagePlaceholder"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"player1"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getName"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parseMinimessagePlaceholder"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"player2"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"otherPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"getName"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parseLegacy"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,l.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"player"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"sendMessage"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ColorParser"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"of"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Your Displayname is: %player_displayname%"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"parsePAPIPlaceholders"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"build"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ColorParser/usage.mdx",route:"/ColorParser/usage",pageMap:[{kind:"Folder",name:"ColorParser",route:"/ColorParser",children:[{kind:"Meta",data:{introduction:"Introduction",installation:"Installation",usage:"Usage"}},{kind:"MdxPage",name:"installation",route:"/ColorParser/installation"},{kind:"MdxPage",name:"introduction",route:"/ColorParser/introduction"},{kind:"MdxPage",name:"usage",route:"/ColorParser/usage"}]},{kind:"Folder",name:"Crate",route:"/Crate",children:[{kind:"Meta",data:{introduction:"Introduction",installation:"Installation",file_formats:"File Formats",settings:"File Settings",basic_usage:"Basic Usage",advanced:"Advanced Usage"}},{kind:"MdxPage",name:"advanced",route:"/Crate/advanced"},{kind:"MdxPage",name:"basic_usage",route:"/Crate/basic_usage"},{kind:"MdxPage",name:"file_formats",route:"/Crate/file_formats"},{kind:"MdxPage",name:"installation",route:"/Crate/installation"},{kind:"MdxPage",name:"introduction",route:"/Crate/introduction"},{kind:"MdxPage",name:"settings",route:"/Crate/settings"}]},{kind:"Meta",data:{index:"Introduction",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://github.com/milkdrinkers/milkdrinkers.github.io",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Basic Usage",headings:c},pageNextRoute:"/ColorParser/usage",nextraLayout:r.ZP,themeConfig:o.Z};s.default=(0,a.j)(h)},8471:function(e,s,n){"use strict";var l=n(1527);n(959);let a={logo:(0,l.jsx)("span",{children:"Milkdrinkers"}),project:{link:"https://github.com/milkdrinkers"},chat:{link:"https://discord.athyrium.eu"},docsRepositoryBase:"https://github.com/milkdrinkers/milkdrinkers.github.io",footer:{text:"Milkdrinkers"}};s.Z=a}},function(e){e.O(0,[774,940,888,179],function(){return e(e.s=2132)}),_N_E=e.O()}]);