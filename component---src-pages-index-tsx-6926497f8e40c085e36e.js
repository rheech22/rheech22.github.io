"use strict";(self.webpackChunkgatsby_starter_blog_github_theme=self.webpackChunkgatsby_starter_blog_github_theme||[]).push([[691],{2831:function(e,t,n){var i=n(7294),o=n(5893);t.Z=e=>{let{load:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[{isIntersecting:n}]=e;n&&t()}));return n.current&&e.observe(n.current),()=>e.disconnect()}),[]),(0,o.jsx)("li",{ref:n})}},6649:function(e,t,n){var i=n(4160),o=n(5086),r=n(6450),l=n(9229),a=n(5893);t.Z=e=>{let{path:t,title:n,updated:o}=e;const{date:r,month:h,year:p}=(0,l.RB)(o);return(0,a.jsx)(s,{onClick:()=>(0,i.navigate)(t),children:(0,a.jsxs)("div",{children:[(0,a.jsxs)(c,{children:[(0,a.jsx)("span",{children:r.padStart(2,"0")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:h}),(0,a.jsx)("span",{children:p})]})]}),(0,a.jsx)(d,{children:n})]})})};const s=o.default.li.withConfig({displayName:"Post__Container",componentId:"sc-6atmrf-0"})(["padding:20px 8px 12px 8px;width:100%;cursor:pointer;& > div{"," margin-bottom:8px;font-weight:600;text-decoration:none;}@media (hover:hover){&:hover{background-color:",";}}"],(0,r.fU)({alignItems:"center"}),(e=>{let{theme:t}=e;return t.postHovered})),d=o.default.h2.withConfig({displayName:"Post__Heading",componentId:"sc-6atmrf-1"})(["font-size:20px;font-weight:600;color:",";margin-bottom:4px;transition:all 0.5s;"],(e=>{let{theme:t}=e;return t.default})),c=o.default.div.withConfig({displayName:"Post__Date",componentId:"sc-6atmrf-2"})(["",";",";min-width:160px;& > span{font-size:50px;font-weight:500;}& > div{",";margin:12px 0 0 4px;font-size:16px;font-weight:200;}"],(0,r.fU)({alignItems:"flex-start"}),(0,r.O3)(),(0,r.fU)({flexDirection:"column"}))},4091:function(e,t,n){var i=n(7294);t.Z=e=>{const{0:t,1:n}=(0,i.useState)(10);return{offset:t,loadMore:()=>{t>e.length||n((e=>e+10))}}}},7581:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return w}});var i=n(4690),o=n(3539),r=n(5086),l=n(2831),a=n(6649),s=n(840),d=n(4091),c=n(6646),h=n(9485),p=n(6450),m=n(765),g=n(5893);var u=()=>{const{posts:e}=(0,c.qp)(),{offset:t,loadMore:n}=(0,d.Z)(e);return e.length?(0,g.jsxs)(f,{children:[(0,g.jsx)(x,{children:"RECENT UPDATES"}),e.slice(0,t).map((e=>{let{node:{id:t,frontmatter:{updated:n,title:i},fields:{slug:o}}}=e;return(0,g.jsx)(a.Z,{path:o,updated:n,title:i},t)})),(0,g.jsx)(l.Z,{load:n}),(0,g.jsx)(s.Z,{})]}):null};const f=r.default.ul.withConfig({displayName:"Posts__Container",componentId:"sc-1apdoby-0"})(["",""],m.uW),x=r.default.div.withConfig({displayName:"Posts__Title",componentId:"sc-1apdoby-1"})(["",";font-weight:600;font-size:24px;text-align:end;width:100%;",";@media ","{font-size:32px;}"],(0,p.O3)(),p.Cg.bottom,h.U.widerThanTablet);var b=n(3009),w=()=>(0,g.jsx)(o.Z,{children:(0,g.jsx)(u,{})});const y=()=>{const{title:e,description:t,image:n,siteUrl:o,twitterUsername:r}=(0,b.$)();return(0,g.jsx)(i.Z,{title:e,subtitle:"Recent Updates",description:t,image:n,url:o,twitterUsername:r})}},765:function(e,t,n){n.d(t,{JH:function(){return a},uW:function(){return l}});var i=n(5086),o=n(9485),r=n(6450);(0,i.css)([""," margin-right:12px;width:148px;height:148px;@media ","{margin-right:0;width:100%;min-height:168px;}"],(0,r.fU)({alignItems:"center",justifyContent:"center"}),o.U.widerThanLaptopS),(0,i.css)(["width:130px;height:130px;border-radius:50%;@media ","{width:168px;height:168px;}"],o.U.widerThanLaptopS);const l=(0,i.css)(["@media ","{max-width:780px;}"," width:100%;& > p{margin-top:50px;width:100%;text-align:center;}& > li + li{",";}"],o.U.widerThanTablet,(0,r.fU)({alignItems:"center",justifyContent:"center",flexDirection:"column"}),r.Cg.top),a=((0,i.css)(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]),(0,i.css)(["font-size:16px;@media ","{font-size:18px;}h1,h2,h3,h4,h5,h6{font-weight:600;.header-anchor{fill:",";}&:not(:first-of-type){margin-top:1.2em;}}h1{margin-block-start:1em;margin-block-end:1em;font-size:36px;}h2{margin-block-start:0.83em;margin-block-end:0.83em;font-size:28.8px;}h3{margin-block-start:1em;margin-block-end:1em;font-size:21.6px;}h4{margin-block-start:1.22em;margin-block-end:1.22em;font-size:19.8px;}em{font-style:oblique;}a{text-underline-position:under;&:hover{color:",";}}p{display:block;margin-block-start:1em;margin-block-end:1em;word-break:break-word;line-height:32px;}ol,ul{padding-left:40px;}ul{list-style-type:disc;}ol{list-style-type:decimal;}li{display:list-item;text-align:-webkit-match-parent;line-height:32px;p{margin:0;}}table{display:block;border-color:gray;border-spacing:0;border-collapse:collapse;width:max-content;max-width:100%;overflow:auto;font-size:16px;thead{display:table-header-group;vertical-align:middle;border-color:inherit;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}tr{display:table-row;vertical-align:inherit;border:inherit;background-color:",";border-top-width:1px;border-top-style:solid;border-top-color:",";transition:all 0.5s;&:nth-of-type(2n){background-color:",";}}th,td{display:table-cell;vertical-align:inherit;padding:6px 13px;border-width:1px;border-style:solid;border-color:",";transition:all 0.5s;}}blockquote{padding:12px 20px 12px 28px;margin:30px 0px;border-left:",";font-family:Georgia,serif;font-style:italic;text-align:justify;font-size:24px;line-height:1.2;transition:all 0.5s;p{margin:0;}}code{margin:0;padding:0.2em 0.4em;background-color:",";color:",";border-radius:6px;font-size:85%;font-family:SFMono-Regular,Menlo,Consolas,Liberation Mono,monospace;}strong{font-weight:bold;}deckgo-highlight-code{--deckgo-highlight-code-carbon-toolbar-display:none;--deckgo-highlight-code-white-space:pre;max-width:90vw;font-size:14px;margin-bottom:32px;}img{@media ","{max-width:694px;}max-width:90vw;}"],o.U.widerThanTablet,(e=>{let{theme:t}=e;return t.link}),(e=>{let{theme:t}=e;return t.link}),(e=>{let{theme:t}=e;return t.tableRowBg}),(e=>{let{theme:t}=e;return t.border}),(e=>{let{theme:t}=e;return t.searchBgFocused}),(e=>{let{theme:t}=e;return t.tableCellBorder}),(e=>{let{theme:t}=e;return"4px solid "+t.default}),(e=>{let{theme:t}=e;return t.codeBg}),(e=>{let{theme:t}=e;return t.codeFontColor}),o.U.widerThanTablet))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6926497f8e40c085e36e.js.map