(self.webpackChunkgatsby_starter_blog_github_theme=self.webpackChunkgatsby_starter_blog_github_theme||[]).push([[186],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!o(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!o(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!o(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",c),d}}},1223:function(e,t,n){var r=n(5112),i=n(30),o=n(3070).f,a=r("unscopables"),c=Array.prototype;null==c[a]&&o(c,a,{configurable:!0,value:i(null)}),e.exports=function(e){c[a][e]=!0}},7475:function(e,t,n){var r=n(3157),i=n(4411),o=n(111),a=n(5112)("species"),c=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(i(t)&&(t===c||r(t.prototype))||o(t)&&null===(t=t[a]))&&(t=void 0)),void 0===t?c:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},648:function(e,t,n){var r=n(1694),i=n(614),o=n(4326),a=n(5112)("toStringTag"),c=Object,s="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),a))?n:s?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},7207:function(e){var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},6790:function(e,t,n){"use strict";var r=n(3157),i=n(6244),o=n(7207),a=n(9974),c=function(e,t,n,s,u,l,d,f){for(var p,h,m=u,g=0,x=!!d&&a(d,f);g<s;)g in n&&(p=x?x(n[g],g,t):n[g],l>0&&r(p)?(h=i(p),m=c(e,t,p,h,m,l-1)-1):(o(m+1),e[m]=p),m++),g++;return m};e.exports=c},9974:function(e,t,n){var r=n(1702),i=n(9662),o=n(4374),a=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?a(e,t):function(){return e.apply(t,arguments)}}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),i=n(7293),o=n(614),a=n(648),c=n(5005),s=n(2788),u=function(){},l=[],d=c("Reflect","construct"),f=/^\s*(?:class|function)\b/,p=r(f.exec),h=!f.exec(u),m=function(e){if(!o(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(a(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!p(f,s(e))}catch(t){return!0}};g.sham=!0,e.exports=!d||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},30:function(e,t,n){var r,i=n(9670),o=n(6048),a=n(748),c=n(3501),s=n(490),u=n(317),l=n(6200),d=l("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"</"+"script>"},h=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},m=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t;m="undefined"!=typeof document?document.domain&&r?h(r):((t=u("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):h(r);for(var n=a.length;n--;)delete m.prototype[a[n]];return m()};c[d]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=i(e),n=new f,f.prototype=null,n[d]=e):n=m(),void 0===t?n:o.f(n,t)}},6048:function(e,t,n){var r=n(9781),i=n(3353),o=n(3070),a=n(9670),c=n(5656),s=n(1956);t.f=r&&!i?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),i=s(t),u=i.length,l=0;u>l;)o.f(e,n=i[l++],r[n]);return e}},1956:function(e,t,n){var r=n(6324),i=n(748);e.exports=Object.keys||function(e){return r(e,i)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},4944:function(e,t,n){"use strict";var r=n(2109),i=n(6790),o=n(7908),a=n(6244),c=n(9303),s=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=a(t),r=s(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:c(e)),r}})},3792:function(e,t,n){n(1223)("flat")},940:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(1074),i=n(7253),o=n(6450),a=n(5893),c=function(e){return(0,a.jsx)("svg",Object.assign({"aria-hidden":"true",role:"img",className:"octicon octicon-chevron-up",viewBox:"0 0 16 16",width:16,height:16,fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"})}))},s=n(7294),u=function(){var e=(0,s.useState)(!0),t=e[0],n=e[1],r=(0,s.useRef)(null);return(0,s.useEffect)((function(){n(0===document.documentElement.scrollTop);var e=function(){return n(0===document.documentElement.scrollTop)},t=function(){return n=(t={cb:e,wait:600}).cb,i=t.wait,void(r.current||(r.current=setTimeout((function(){n(),r.current=null}),i)));var t,n,i};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t),r.current&&clearTimeout(r.current)}}),[]),{isTop:t,handleClickButton:function(){return document.documentElement.scrollTop=0}}},l=function(){var e=u(),t=e.isTop,n=e.handleClickButton;return t?null:(0,a.jsx)(d,{onClick:function(){return n()},children:(0,a.jsx)(c,{})})},d=r.default.div.withConfig({displayName:"ScrollToTop__Container",componentId:"sc-62unxl-0"})([""," position:fixed;bottom:0;right:0;margin:0 24px 24px 0;border-radius:50%;width:40px;height:40px;background-color:",";cursor:pointer;svg{path{fill:white;}}@media (hover:hover){&:hover{&::before{position:absolute;top:-6px;right:50%;bottom:auto;margin-right:-6px;width:0;height:0;color:",';content:"";border:6px solid transparent;border-top-color:',";opacity:0.7;}&::after{position:absolute;bottom:100%;right:50%;transform:translateX(50%);content:'Scroll to top';pointer-events:none;font-size:12px;min-width:fit-content;white-space:nowrap;background-color:",";color:white;padding:4px 6px;border:none;border-radius:6px;margin-bottom:6px;-webkit-font-smoothing:subpixel-antialiased;opacity:0.7;}}}"],(0,o.f)({alignItems:"center",justifyContent:"center"}),(function(e){return e.theme.searchSuggestionHovered}),i.RY,i.RY,i.RY)},7135:function(e,t,n){"use strict";var r=n(1074),i=n(765),o=n(7253),a=n(5893);t.Z=function(e){var t=e.onClick,n=e.isSelected,r=void 0!==n&&n,i=e.tag;return(0,a.jsx)(c,{onClick:function(e){e.stopPropagation();var n=e.currentTarget.innerHTML;t(n)},isSelected:r,children:i})};var c=r.default.li.withConfig({displayName:"Tag__Container",componentId:"sc-1ml3ond-0"})([""," margin-right:1.5px;margin-bottom:3px;border:1px solid rgba(0,0,0,0);border-radius:2em;padding:0 10px;min-height:fit-content;width:fit-content;max-width:296px;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:",";color:",";font-size:12px;font-weight:500;line-height:22px;cursor:pointer;@media (hover:hover){&:hover{overflow-x:visible;text-overflow:unset;background-color:",";color:",";}}"],i.L$,(function(e){var t=e.theme;return e.isSelected?t.tagBgHovered:t.lightBlue}),(function(e){var t=e.theme;return e.isSelected?o.ix:t.blue}),(function(e){return e.theme.tagBgHovered}),o.ix)},2262:function(e,t,n){"use strict";n(4944),n(3792);var r=n(1597),i=n(6646),o=n(9229);t.Z=function(){var e=(0,i.qp)(),t=e.posts,n=e.tag,a=t.map((function(e){var t;return null===(t=e.node.frontmatter)||void 0===t?void 0:t.tags})).flat();return{tags:(0,o.Pj)((0,o.bg)(a)),searchByTag:function(e){if(e.toLowerCase()===n)return(0,r.navigate)("/");(0,r.navigate)("/search/?tag="+encodeURI(e),{state:{tag:e}})}}}},765:function(e,t,n){"use strict";n.d(t,{JH:function(){return s},L$:function(){return c},uW:function(){return a}});var r=n(1074),i=n(9485),o=n(6450),a=((0,r.css)([""," margin-right:12px;width:148px;height:148px;@media ","{margin-right:0;width:100%;min-height:168px;}"],(0,o.f)({alignItems:"center",justifyContent:"center"}),i.U.widerThanLaptop),(0,r.css)(["width:130px;height:130px;border-radius:50%;@media ","{width:168px;height:168px;}"],i.U.widerThanLaptop),(0,r.css)(["@media ","{margin:0 10px;padding:0px 10px;max-width:780px;}"," margin-left:0;padding:0px 20px;width:100%;& > p{margin-top:50px;width:100%;text-align:center;}& > li + li{",";}"],i.U.widerThanTablet,(0,o.f)({alignItems:"center",justifyContent:"center",flexDirection:"column"}),o.C.top)),c=(0,r.css)(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;"]),s=(0,r.css)(["font-size:16px;@media ","{font-size:18px;}h1,h2,h3,h4,h5,h6{font-weight:600;.header-anchor{fill:",";}}h1{margin-block-start:1em;margin-block-end:1em;font-size:36px;}h2{margin-block-start:0.83em;margin-block-end:0.83em;font-size:28.8px;}h3{margin-block-start:1em;margin-block-end:1em;font-size:21.6px;}h4{margin-block-start:1.22em;margin-block-end:1.22em;font-size:19.8px;}p{display:block;margin-block-start:1em;margin-block-end:1em;word-break:break-word;line-height:1.8em;}ol,ul{padding-left:40px;}ul{list-style-type:disc;}ol{list-style-type:decimal;}li{display:list-item;text-align:-webkit-match-parent;}code{margin:0;padding:0.2em 0.4em;background-color:",";border-radius:6px;font-size:85%;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;}deckgo-highlight-code{max-width:90vw;font-size:14px;}img{@media ","{max-width:694px;}max-width:90vw;}"],i.U.widerThanTablet,(function(e){return e.theme.default}),(function(e){return e.theme.codeBg}),i.U.widerThanTablet)},1768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Je}});var r,i,o,a,c=n(1597),s=n(7294),u=n(5893),l=function(e){return(0,u.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",className:"duration-100 ease-in transition -rotate-90 text-gray-30 dark:text-gray-50 inline group-focus:text-link dark:group-focus:text-link-dark",style:{minWidth:20,minHeight:20}},e,{children:(0,u.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(-446 -398)",children:[(0,u.jsx)("path",{fill:"currentColor",fillRule:"nonzero",d:"M95.8838835,240.366117 C95.3957281,239.877961 94.6042719,239.877961 94.1161165,240.366117 C93.6279612,240.854272 93.6279612,241.645728 94.1161165,242.133883 L98.6161165,246.633883 C99.1042719,247.122039 99.8957281,247.122039 100.383883,246.633883 L104.883883,242.133883 C105.372039,241.645728 105.372039,240.854272 104.883883,240.366117 C104.395728,239.877961 103.604272,239.877961 103.116117,240.366117 L99.5,243.982233 L95.8838835,240.366117 Z",transform:"translate(356.5 164.5)"}),(0,u.jsx)("polygon",{points:"446 418 466 418 466 398 446 398"})]})}))},d=n(1074),f=n(9485),p=n(765),h=n(6450),m=d.default.section.withConfig({displayName:"styles__Section",componentId:"sc-4114r5-0"})([""," margin:72px auto 0 auto;padding-top:48px;width:100%;height:auto;"],(0,h.f)({justifyContent:"center"})),g=d.default.article.withConfig({displayName:"styles__Article",componentId:"sc-4114r5-1"})(["@media ","{transform:translateX(3%);width:726px;}@media ","{",";}",";padding:48px 16px;width:100%;"],f.U.widerThanTablet,f.U.widerThanLaptopS,(function(e){return e.hasHeadings?"margin-left: auto; transform: translateX(12%);":""}),(0,h.f)({flexDirection:"column"})),x=d.default.header.withConfig({displayName:"styles__Header",componentId:"sc-4114r5-2"})(["margin-bottom:26px;"]),v=d.default.main.withConfig({displayName:"styles__Main",componentId:"sc-4114r5-3"})(["& > section{&:nth-child(1){","}}"],p.JH),y=d.default.h1.withConfig({displayName:"styles__Title",componentId:"sc-4114r5-4"})(["@media ","{font-size:42px;}margin-bottom:4px;font-size:36px;font-weight:600;"],f.U.widerThanMobile),b=d.default.div.withConfig({displayName:"styles__SubTitle",componentId:"sc-4114r5-5"})(["color:",";font-size:14px;"],(function(e){return e.theme.mute})),w=d.default.ul.withConfig({displayName:"styles__Tags",componentId:"sc-4114r5-6"})(["",";flex-wrap:wrap;margin-top:14px;"],(0,h.f)({alignItems:"center"})),T=d.default.nav.withConfig({displayName:"styles__Nav",componentId:"sc-4114r5-7"})(["@media ","{flex-direction:row;}",";margin-top:8em;& > div{width:100%;& > a{@media ","{width:fit-content;min-width:192px;}",";padding:8px;border-radius:8px;text-decoration:none;width:100%;@media (hover:hover){&:hover{background-color:",";span{text-decoration:underline;}}}& > svg{path{fill:",";}}& > div{& > h3{",";font-size:12px;height:30px;}& > span{",";color:",";height:30px;}}}&:first-of-type{& > a{justify-content:flex-start;margin-right:auto;padding-left:4px;& > div{margin-left:20px;span,h3{justify-content:start;}}& > svg{transform:rotate(90deg);}}}&:last-of-type{& > a{justify-content:flex-end;margin-left:auto;padding-right:4px;& > div{margin-right:20px;span,h3{justify-content:flex-end;}}& > svg{transform:rotate(-90deg);}}}}"],f.U.widerThanMobile,(0,h.f)({alignItems:"center",justifyContent:"space-between",flexDirection:"column"}),f.U.widerThanMobile,(0,h.f)({alignItems:"center"}),(function(e){return e.theme.lightBlue}),(function(e){return e.theme.mute}),(0,h.f)({alignItems:"center"}),(0,h.f)({alignItems:"center"}),(function(e){return e.theme.blue})),j=d.default.section.withConfig({displayName:"styles__Comments",componentId:"sc-4114r5-8"})(["width:100%;padding:0 8px 3em 8px;"]),C=n(6646),k=function(){var e=(0,C.I0)(),t=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(t.current){var n=Array.from(t.current.querySelectorAll("h1, h2, h3, h4, h5, h6")),r=!1,i=function(){if(!r)return r=!0,requestAnimationFrame((function(){n.forEach((function(t){(function(e){return document.documentElement.scrollTop-e.offsetTop>=-5})(t)&&e({type:"setCurrentHeadingId",payload:{headingId:t.id}})})),r=!1}))};return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}}),[]),t},A=n(2262),O=n(9229),S=n(8526),E=function(e){return(0,u.jsx)("svg",Object.assign({width:"20px",height:"20px",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,u.jsx)("path",{d:"M15 10l-9 5V5l9 5z"})}))},I=n(5815),L=function(e){var t=e.title,n=e.series,r=e.relatedPosts,i=(0,s.useState)(!1),o=i[0],a=i[1];return r.length?(0,u.jsxs)(_,{more:o,children:[(0,u.jsxs)(I.Z,{onClick:function(){return a((function(e){return!e}))},accessibleName:"show related posts",children:[(0,u.jsx)(E,{}),(0,u.jsx)("h3",{children:"More about"}),(0,u.jsx)("strong",{children:n})]}),o&&(0,u.jsx)(P,{children:r.map((function(e,n){var r,i,o=null!==(r=null==e?void 0:e.title)&&void 0!==r?r:"",a=null!==(i=null==e?void 0:e.path)&&void 0!==i?i:"";return(0,u.jsx)("li",{children:o===t?(0,u.jsx)("span",{children:o}):(0,u.jsx)(c.Link,{to:a,children:o})},n)}))})]}):null},_=d.default.div.withConfig({displayName:"RelatedPosts__Container",componentId:"sc-4dmnp0-0"})([""," margin-top:32px;border-radius:8px;padding:20px 10px;background-color:",";& > button{"," padding:10px;border-radius:8px;background:none;border:none;cursor:pointer;font-size:16px;width:100%;& > h3{word-break:keep-all;color:",";line-height:18px;font-weight:300;}& > svg{margin-right:6px;fill:",";transform:",";transition:transform 0.5s;}& > strong{color:",";line-height:18px;font-weight:600;margin-left:8px;}@media (hover:hover){&:hover{background-color:",";}}}"],(0,h.f)({alignItems:"flex-start",flexDirection:"column"}),(function(e){return e.theme.seriesBg}),(0,h.f)({alignItems:"center"}),(function(e){return e.theme.default}),(function(e){return e.theme.default}),(function(e){return e.more?"rotate(90deg)":""}),(function(e){return e.theme.series}),(function(e){return e.theme.seriesBgHovered})),P=d.default.ol.withConfig({displayName:"RelatedPosts__List",componentId:"sc-4dmnp0-1"})(["margin-top:21px;padding-left:46px;list-style:decimal;span{font-weight:500;}a{text-decoration:none;color:",";@media (hover:hover){&:hover{text-decoration:underline;}}}li + li{margin-top:4px;}"],(function(e){return e.theme.mute})),N=n(940),M=(0,s.memo)((function(e){var t=e.repo,n=e.theme,r=(0,s.createRef)();return(0,s.useLayoutEffect)((function(){if(r.current){var e=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:t,"issue-term":"pathname",label:"comment",theme:n,crossOrigin:"anonymous",async:"true"};Object.entries(i).forEach((function(t){var n=t[0],r=t[1];e.setAttribute(n,r)})),r.current.appendChild(e)}}),[t]),(0,s.useLayoutEffect)((function(){var e,t;if(r.current){var i=null===(e=r.current.firstElementChild)||void 0===e?void 0:e.firstElementChild;null==i||null===(t=i.contentWindow)||void 0===t||t.postMessage({type:"set-theme",theme:n},"https://utteranc.es")}}),[n]),(0,u.jsx)("div",{ref:r})})),R=n(7135),B=function(e){var t=e.headings,n=(0,C.qp)().headingId;return(0,u.jsxs)(z,{children:[(0,u.jsx)("h2",{children:"ON THIS PAGE"}),(0,u.jsx)("ul",{children:t.map((function(e){if(!e)return null;var t=e.id,r=e.depth,i=e.value;return(0,u.jsx)(H,{depth:r,isIntersecting:t===n,children:(0,u.jsx)(c.Link,{to:"#"+(null!=t?t:""),children:i})},t)}))})]})},z=d.default.aside.withConfig({displayName:"TOC__Container",componentId:"sc-1ylks3q-0"})(["@media ","{display:block;}display:none;position:sticky;top:10px;right:0px;margin-left:auto;margin-top:38px;max-width:300px;min-width:fit-content;height:fit-content;color:",";overflow-y:scroll;&::-webkit-scrollbar{display:none;}h2{margin-bottom:12px;padding:8px 10px;font-size:14px;font-weight:500;letter-spacing:.025em;}ul{padding-left:20px;}li + li{margin-top:8px;}"],f.U.widerThanLaptopS,(function(e){return e.theme.default})),H=d.default.li.withConfig({displayName:"TOC__List",componentId:"sc-1ylks3q-1"})(["display:flex;align-items:center;margin-left:auto;border-top-left-radius:0.5em;border-bottom-left-radius:0.5em;padding-left:",";padding-right:10px;max-width:265px;width:100%;background-color:",";color:",";font-size:",";transition:all 50ms ease-in-out;@media (hover:hover){&:hover{color:",";}}a{padding:",";;width:100%;text-decoration:unset;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;}"],(function(e){var t=e.depth;return t&&t>0?8*t+"px":"8px"}),(function(e){var t=e.theme;return e.isIntersecting?t.lightBlue:"none"}),(function(e){var t=e.theme;return e.isIntersecting?t.blue:t.mute}),(function(e){var t=e.depth;return t&&t>0?14-t+"px":"14px"}),(function(e){return e.theme.blue}),(function(e){var t=e.depth;return t&&t>0?8-t+"px 0":"8px 0"})),U=n(5697),q=n.n(U),F=n(4839),D=n.n(F),Y=n(2993),Z=n.n(Y),W=n(6494),K=n.n(W),V="bodyAttributes",X="htmlAttributes",$="titleAttributes",G={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},J=(Object.keys(G).map((function(e){return G[e]})),"charset"),Q="cssText",ee="href",te="http-equiv",ne="innerHTML",re="itemprop",ie="name",oe="property",ae="rel",ce="src",se="target",ue={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},le="defaultTitle",de="defer",fe="encodeSpecialCharacters",pe="onChangeClientState",he="titleTemplate",me=Object.keys(ue).reduce((function(e,t){return e[ue[t]]=t,e}),{}),ge=[G.NOSCRIPT,G.SCRIPT,G.STYLE],xe="data-react-helmet",ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},be=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},je=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ce=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ke=function(e){var t=Ie(e,G.TITLE),n=Ie(e,he);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Ie(e,le);return t||r||void 0},Ae=function(e){return Ie(e,pe)||function(){}},Oe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return we({},e,t)}),{})},Se=function(e,t){return t.filter((function(e){return void 0!==e[G.BASE]})).map((function(e){return e[G.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Ee=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Me("Helmet: "+e+' should be of type "Array". Instead found type "'+ve(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||n===ae&&"canonical"===e[n].toLowerCase()||s===ae&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==ne&&c!==Q&&c!==re||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],s=K()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},Ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Le=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Le(e)}),0)}),_e=function(e){return clearTimeout(e)},Pe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Le:n.g.requestAnimationFrame||Le,Ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_e:n.g.cancelAnimationFrame||_e,Me=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Re=null,Be=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;Ue(G.BODY,r),Ue(G.HTML,i),He(d,f);var p={baseTag:qe(G.BASE,n),linkTags:qe(G.LINK,o),metaTags:qe(G.META,a),noscriptTags:qe(G.NOSCRIPT,c),scriptTags:qe(G.SCRIPT,u),styleTags:qe(G.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),s(e,h,m)},ze=function(e){return Array.isArray(e)?e.join(""):e},He=function(e,t){void 0!==e&&document.title!==e&&(document.title=ze(e)),Ue(G.TITLE,t)},Ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(xe),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(xe):n.getAttribute(xe)!==a.join(",")&&n.setAttribute(xe,a.join(","))}},qe=function(e,t){var n=document.head||document.querySelector(G.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===ne)n.innerHTML=t.innerHTML;else if(r===Q)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(xe,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},Fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[ue[n]||n]=e[n],t}),t)},Ye=function(e,t,n){switch(e){case G.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[xe]=!0,i=De(n,r),[s.createElement(G.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=Fe(n),o=ze(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Ce(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Ce(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case V:case X:return{toComponent:function(){return De(t)},toString:function(){return Fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[xe]=!0,r);return Object.keys(t).forEach((function(e){var n=ue[e]||e;if(n===ne||n===Q){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===ne||e===Q)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+Ce(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===ge.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Ze=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:Ye(G.BASE,t,r),bodyAttributes:Ye(V,n,r),htmlAttributes:Ye(X,i,r),link:Ye(G.LINK,o,r),meta:Ye(G.META,a,r),noscript:Ye(G.NOSCRIPT,c,r),script:Ye(G.SCRIPT,s,r),style:Ye(G.STYLE,u,r),title:Ye(G.TITLE,{title:d,titleAttributes:f},r)}},We=D()((function(e){return{baseTag:Se([ee,se],e),bodyAttributes:Oe(V,e),defer:Ie(e,de),encode:Ie(e,fe),htmlAttributes:Oe(X,e),linkTags:Ee(G.LINK,[ae,ee],e),metaTags:Ee(G.META,[ie,J,te,oe,re],e),noscriptTags:Ee(G.NOSCRIPT,[ne],e),onChangeClientState:Ae(e),scriptTags:Ee(G.SCRIPT,[ce,ne],e),styleTags:Ee(G.STYLE,[Q],e),title:ke(e),titleAttributes:Oe($,e)}}),(function(e){Re&&Ne(Re),e.defer?Re=Pe((function(){Be(e,(function(){Re=null}))})):(Be(e),Re=null)}),Ze)((function(){return null})),Ke=(i=We,a=o=function(e){function t(){return ye(this,t),je(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!Z()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case G.SCRIPT:case G.NOSCRIPT:return{innerHTML:t};case G.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return we({},r,((t={})[n.type]=[].concat(r[n.type]||[],[we({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case G.TITLE:return we({},i,((t={})[r.type]=a,t.titleAttributes=we({},o),t));case G.BODY:return we({},i,{bodyAttributes:we({},o)});case G.HTML:return we({},i,{htmlAttributes:we({},o)})}return we({},i,((n={})[r.type]=we({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=we({},t);return Object.keys(e).forEach((function(t){var r;n=we({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[me[n]||n]=e[n],t}),t)}(Te(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case G.LINK:case G.META:case G.NOSCRIPT:case G.SCRIPT:case G.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Te(e,["children"]),r=we({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},be(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:q().object,bodyAttributes:q().object,children:q().oneOfType([q().arrayOf(q().node),q().node]),defaultTitle:q().string,defer:q().bool,encodeSpecialCharacters:q().bool,htmlAttributes:q().object,link:q().arrayOf(q().object),meta:q().arrayOf(q().object),noscript:q().arrayOf(q().object),onChangeClientState:q().func,script:q().arrayOf(q().object),style:q().arrayOf(q().object),title:q().string,titleAttributes:q().object,titleTemplate:q().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=Ze({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ke.renderStatic=Ke.rewind;var Ve=S.Z.title,Xe=S.Z.siteUrl,$e=S.Z.twitterUsername,Ge=function(e){var t=e.title,n=e.excerpt,r=e.path,i=e.date;return(0,u.jsxs)(Ke,{children:[(0,u.jsxs)("title",{children:[t," | ",Ve]}),(0,u.jsx)("meta",{name:"description",content:n}),(0,u.jsx)("meta",{name:"image",content:""}),(0,u.jsx)("meta",{name:"og:title",content:t}),(0,u.jsx)("meta",{name:"og:description",content:n}),(0,u.jsx)("meta",{name:"og:type",content:"website"}),(0,u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,u.jsx)("meta",{name:"twitter:title",content:t}),(0,u.jsx)("meta",{name:"twitter:description",content:n}),(0,u.jsx)("meta",{name:"twitter:url",content:""+Xe+t}),(0,u.jsx)("meta",{name:"twitter:image",content:""}),(0,u.jsx)("meta",{name:"twitter:creator",content:"@"+$e}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,u.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "Article",\n              "url": "'+Xe+r+'",\n              "headline": "'+t+'",\n              "datePublisehd": "'+i+'",\n              "dateModified": "'+i+'",\n              "image": "[]"\n            }\n          '})]})},Je=function(e){var t=e.data,n=e.pageContext,r=(0,C.I0)(),i=(0,C.qp)(),o=i.displayMode,a=i.posts,d=(0,A.Z)().searchByTag,f=k(),p=(0,O.DN)(t),h=p.title,E=p.date,I=p.path,_=p.tags,P=p.series,z=p.contents,H=p.excerpt,U=p.headings,q=p.timeToRead,F=Boolean(U.length),D=n,Y=D.prev,Z=D.next,W=a.filter((function(e){var t;return(null===(t=e.node.frontmatter)||void 0===t?void 0:t.series)===P})).map((function(e){return e.node.frontmatter}));return(0,s.useEffect)((function(){return r({type:"clearSearch"})}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(Ge,{title:h,excerpt:H,date:E,path:I}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(g,{hasHeadings:F,children:[(0,u.jsxs)(x,{children:[(0,u.jsx)(y,{children:h}),(0,u.jsxs)(b,{children:[(0,u.jsx)("time",{dateTime:"updated at",children:(0,O.fh)({date:E,getYear:!0})}),(0,u.jsxs)("span",{children:[" — ",q," min read"]})]}),_.length?(0,u.jsx)(w,{children:_.map((function(e,t){return(0,u.jsx)(R.Z,{tag:e,onClick:d},t)}))}):null,(0,u.jsx)(L,{title:h,series:P,relatedPosts:W.reverse()})]}),(0,u.jsx)(v,{children:(0,u.jsx)("section",{ref:f,dangerouslySetInnerHTML:{__html:z}})}),(0,u.jsxs)(T,{children:[(0,u.jsx)("div",{children:Boolean(Y.path)&&(0,u.jsxs)(c.Link,{to:Y.path,children:[(0,u.jsx)(l,{}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"PREVIOUS"}),(0,u.jsx)("span",{children:Y.title})]})]})}),(0,u.jsx)("div",{children:Boolean(Z.path)&&(0,u.jsxs)(c.Link,{to:Z.path,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"NEXT"}),(0,u.jsx)("span",{children:Z.title})]}),(0,u.jsx)(l,{})]})})]})]}),F&&(0,u.jsx)(B,{headings:U}),(0,u.jsx)(N.Z,{})]}),o&&(0,u.jsx)(j,{children:(0,u.jsx)(M,{repo:S.Z.commentRepo,theme:"day"===o?"gitub-light":"github-dark"})})]})}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-1232245654bd5c2b3ead.js.map