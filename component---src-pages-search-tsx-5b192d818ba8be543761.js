"use strict";(self.webpackChunkgatsby_starter_blog_github_theme=self.webpackChunkgatsby_starter_blog_github_theme||[]).push([[334],{2831:function(e,t,r){var n=r(7294),i=r(5893);t.Z=e=>{let{load:t}=e;const r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=new IntersectionObserver((e=>{let[{isIntersecting:r}]=e;r&&t()}));return r.current&&e.observe(r.current),()=>e.disconnect()}),[]),(0,i.jsx)("li",{ref:r})}},6649:function(e,t,r){var n=r(4160),i=r(5086),o=r(6450),l=r(9229),a=r(5893);t.Z=e=>{let{path:t,title:r,updated:i}=e;const{date:o,month:h,year:p}=(0,l.RB)(i);return(0,a.jsx)(s,{onClick:()=>(0,n.navigate)(t),children:(0,a.jsxs)("div",{children:[(0,a.jsxs)(c,{children:[(0,a.jsx)("span",{children:o.padStart(2,"0")}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:h}),(0,a.jsx)("span",{children:p})]})]}),(0,a.jsx)(d,{children:r})]})})};const s=i.default.li.withConfig({displayName:"Post__Container",componentId:"sc-6atmrf-0"})(["padding:20px 8px 12px 8px;width:100%;cursor:pointer;& > div{"," margin-bottom:8px;font-weight:600;text-decoration:none;}@media (hover:hover){&:hover{background-color:",";}}"],(0,o.fU)({alignItems:"center"}),(e=>{let{theme:t}=e;return t.postHovered})),d=i.default.h2.withConfig({displayName:"Post__Heading",componentId:"sc-6atmrf-1"})(["font-size:20px;font-weight:600;color:",";margin-bottom:4px;transition:all 0.5s;"],(e=>{let{theme:t}=e;return t.default})),c=i.default.div.withConfig({displayName:"Post__Date",componentId:"sc-6atmrf-2"})(["",";",";min-width:160px;& > span{font-size:50px;font-weight:500;}& > div{",";margin:12px 0 0 4px;font-size:16px;font-weight:200;}"],(0,o.fU)({alignItems:"flex-start"}),(0,o.O3)(),(0,o.fU)({flexDirection:"column"}))},4091:function(e,t,r){var n=r(7294);t.Z=e=>{const{0:t,1:r}=(0,n.useState)(10);return{offset:t,loadMore:()=>{t>e.length||r((e=>e+10))}}}},2471:function(e,t,r){r.r(t),r.d(t,{Head:function(){return v},default:function(){return y}});var n=r(4690),i=r(3539),o=r(5086),l=r(2831),a=r(5893);var s=e=>{let{prefix:t}=e;return(0,a.jsxs)("p",{children:[t," 없습니다."]})},d=r(6649),c=r(840),h=r(6646);var p=e=>{let{searchFilter:t,searchKeyword:r}=e;const{posts:n}=(0,h.qp)(),i=(e=>{let{posts:t,searchKeyword:r,searchFilter:n}=e;return r?t.filter((e=>{let{node:{frontmatter:{title:t},html:i}}=e;const o=t.toLowerCase().includes(r.toLowerCase()),l=null==i?void 0:i.toLowerCase().includes(r.toLowerCase());return"title"===n?o:"content"===n?l:o||l})):t})({posts:n,searchFilter:t,searchKeyword:r});return i},m=r(4091),g=r(6450),u=r(765);var f=e=>{let{locationState:t}=e;const r=p({searchFilter:null==t?void 0:t.searchFilter,searchKeyword:null==t?void 0:t.searchKeyword}),{offset:n,loadMore:i}=(0,m.Z)(r);return(0,a.jsxs)(x,{children:[(0,a.jsxs)(b,{children:["SEARCHING FOR ",(0,a.jsx)("strong",{children:null==t?void 0:t.searchKeyword})]}),0===r.length?(0,a.jsx)(s,{prefix:"검색 결과가"}):r.slice(0,n).map((e=>{let{node:{id:t,frontmatter:{updated:r,title:n},fields:{slug:i}}}=e;return(0,a.jsx)(d.Z,{path:i,updated:r,title:n},t)})),(0,a.jsx)(l.Z,{load:i}),(0,a.jsx)(c.Z,{})]})};const x=o.default.ul.withConfig({displayName:"SearchResult__Container",componentId:"sc-7c4hq2-0"})(["",";& > p{font-size:24px;font-weight:600;}"],u.uW),b=o.default.div.withConfig({displayName:"SearchResult__Title",componentId:"sc-7c4hq2-1"})(["",";font-weight:600;font-size:32px;width:100%;text-align:end;& > strong{color:#bd4a55;}",";"],(0,g.O3)(),g.Cg.bottom);var w=r(3009),y=e=>{let{location:t}=e;return(0,a.jsx)(i.Z,{children:(0,a.jsx)(f,{locationState:t.state})})};const v=()=>{const{title:e,description:t,image:r,siteUrl:i,twitterUsername:o}=(0,w.$)();return(0,a.jsx)(n.Z,{title:e,subtitle:"Search",description:t,image:r,url:i,twitterUsername:o})}},765:function(e,t,r){r.d(t,{JH:function(){return a},uW:function(){return l}});var n=r(5086),i=r(9485),o=r(6450);(0,n.css)([""," margin-right:12px;width:148px;height:148px;@media ","{margin-right:0;width:100%;min-height:168px;}"],(0,o.fU)({alignItems:"center",justifyContent:"center"}),i.U.widerThanLaptopS),(0,n.css)(["width:130px;height:130px;border-radius:50%;@media ","{width:168px;height:168px;}"],i.U.widerThanLaptopS);const l=(0,n.css)(["@media ","{max-width:780px;}"," width:100%;& > p{margin-top:50px;width:100%;text-align:center;}& > li + li{",";}"],i.U.widerThanTablet,(0,o.fU)({alignItems:"center",justifyContent:"center",flexDirection:"column"}),o.Cg.top),a=((0,n.css)(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]),(0,n.css)(["font-size:16px;@media ","{font-size:18px;}h1,h2,h3,h4,h5,h6{font-weight:600;.header-anchor{fill:",";}&:not(:first-of-type){margin-top:1.2em;}}h1{margin-block-start:1em;margin-block-end:1em;font-size:36px;}h2{margin-block-start:0.83em;margin-block-end:0.83em;font-size:28.8px;}h3{margin-block-start:1em;margin-block-end:1em;font-size:21.6px;}h4{margin-block-start:1.22em;margin-block-end:1.22em;font-size:19.8px;}em{font-style:oblique;}a{text-underline-position:under;&:hover{color:",";}}p{display:block;margin-block-start:1em;margin-block-end:1em;word-break:break-word;line-height:32px;}ol,ul{padding-left:40px;}ul{list-style-type:disc;}ol{list-style-type:decimal;}li{display:list-item;text-align:-webkit-match-parent;line-height:32px;p{margin:0;}}table{display:block;border-color:gray;border-spacing:0;border-collapse:collapse;width:max-content;max-width:100%;overflow:auto;font-size:16px;thead{display:table-header-group;vertical-align:middle;border-color:inherit;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}tr{display:table-row;vertical-align:inherit;border:inherit;background-color:",";border-top-width:1px;border-top-style:solid;border-top-color:",";transition:all 0.5s;&:nth-of-type(2n){background-color:",";}}th,td{display:table-cell;vertical-align:inherit;padding:6px 13px;border-width:1px;border-style:solid;border-color:",";transition:all 0.5s;}}blockquote{padding:12px 20px 12px 28px;margin:30px 0px;border-left:",";font-family:Georgia,serif;font-style:italic;text-align:justify;font-size:24px;line-height:1.2;transition:all 0.5s;p{margin:0;}}code{margin:0;padding:0.2em 0.4em;background-color:",";color:",";border-radius:6px;font-size:85%;font-family:SFMono-Regular,Menlo,Consolas,Liberation Mono,monospace;}strong{font-weight:bold;}deckgo-highlight-code{--deckgo-highlight-code-carbon-toolbar-display:none;--deckgo-highlight-code-white-space:pre;max-width:90vw;font-size:14px;margin-bottom:32px;}img{@media ","{max-width:694px;}max-width:90vw;}"],i.U.widerThanTablet,(e=>{let{theme:t}=e;return t.link}),(e=>{let{theme:t}=e;return t.link}),(e=>{let{theme:t}=e;return t.tableRowBg}),(e=>{let{theme:t}=e;return t.border}),(e=>{let{theme:t}=e;return t.searchBgFocused}),(e=>{let{theme:t}=e;return t.tableCellBorder}),(e=>{let{theme:t}=e;return"4px solid "+t.default}),(e=>{let{theme:t}=e;return t.codeBg}),(e=>{let{theme:t}=e;return t.codeFontColor}),i.U.widerThanTablet))}}]);
//# sourceMappingURL=component---src-pages-search-tsx-5b192d818ba8be543761.js.map