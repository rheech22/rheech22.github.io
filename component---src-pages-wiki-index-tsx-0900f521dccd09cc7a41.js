/*! For license information please see component---src-pages-wiki-index-tsx-0900f521dccd09cc7a41.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog_github_theme=self.webpackChunkgatsby_starter_blog_github_theme||[]).push([[534],{9267:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return ue},default:function(){return se}});var n=r(4690),o=r(3539),i=(r(7207),r(1880)),a=r(7294);function c(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var s=r(7462),u=r(7326),l=r(4578),f=r(9864),d=r(8679),p=r.n(d);function h(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var y=a.createContext();var v={initialChunks:{}},m="PENDING",g="REJECTED";var b=function(e){return e};function w(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,n=e.render,o=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),d={};function b(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):"static"}function w(e,n,o){var i=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,f.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return p()(o,i,{preload:!0}),i}var x=function(e){var t=b(e),r=d[t];return r&&r.status!==g||((r=i.requireAsync(e)).status=m,d[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:i.resolve(e),chunkName:i.chunkName(e),error:t?t.message:t}),r.status=g}))),r},O=function(e){var t=function(t){return a.createElement(y.Consumer,null,(function(r){return a.createElement(e,Object.assign({__chunkExtractor:r},t))}))};return e.displayName&&(t.displayName=e.displayName+"WithChunkExtractor"),t}(function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:b(r)},h(!r.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(i.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(i.chunkName(r))),(0,u.Z)(n)):(!1!==t.ssr&&(i.isReady&&i.isReady(r)||i.chunkName&&v.initialChunks[i.chunkName(r)])&&n.loadSync(),n)}(0,l.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=b(e);return(0,s.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var a=r.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===g&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return b(this.props)},a.getCache=function(){return d[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),d[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=w(i.requireSync(this.props),this.props,k);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:i.resolve(this.props),chunkName:i.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=w(t,e.props,k);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,c(e,["__chunkExtractor","forwardedRef"]));return x(t)},a.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,i=(e.__chunkExtractor,c(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,u=a.error,l=a.loading,f=a.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===m)throw this.loadAsync();if(u)throw u;var d=o||t.fallback||null;return l?d:n({fallback:d,result:f,options:t,props:(0,s.Z)({},i,{ref:r})})},r}(a.Component)),k=a.forwardRef((function(e,t){return a.createElement(O,Object.assign({forwardedRef:t},e))}));return k.displayName="Loadable",k.preload=function(e){k.load(e)},k.load=function(e){return x(e)},k}return{loadable:i,lazy:function(e,t){return i(e,(0,s.Z)({},t,{suspense:!0}))}}}var x=w({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return a.createElement(t,r)}}),O=x.loadable,k=x.lazy,S=w({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),j=S.loadable,R=S.lazy;var E=O;E.lib=j,k.lib=R;var _=E,C=r(1562),P=r(3935),$=r(3279),N=r.n($),T=r(3493),M=r.n(T),z=function(e,t){return z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},z(e,t)};function A(e,t){function r(){this.constructor=e}z(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var D=function(){return D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},D.apply(this,arguments)};function H(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var Z=function(e,t,r,n){switch(t){case"debounce":return N()(e,r,n);case"throttle":return M()(e,r,n);default:return e}},F=function(e){return"function"==typeof e},I=function(){return"undefined"==typeof window},W=function(e){return e instanceof Element||e instanceof HTMLDocument};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!I()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(I())return null;if(t)return document.querySelector(t);if(n&&W(n))return n;if(r.targetRef&&W(r.targetRef.current))return r.targetRef.current;var o=(0,P.findDOMNode)(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,c=t.onResize;if(o||a){e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!I()&&function(e){var t=e.width,n=e.height;r.state.width===t&&r.state.height===n||r.state.width===t&&!a||r.state.height===n&&!o||(null==c||c(t,n),r.setState({width:t,height:n}))}({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return F(t)?"renderProp":F(n)?"childFunction":(0,a.isValidElement)(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.sizeRef={current:r.state},r.skipOnMount=n,r.targetRef=(0,a.createRef)(),r.observableElement=null,I()||(r.resizeHandler=Z(r.createResizeHandler,o,c,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}A(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},t.prototype.componentWillUnmount=function(){I()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e=this.props,t=e.render,r=e.children,n=e.nodeType,o=void 0===n?"div":n,i=this.state,c={width:i.width,height:i.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return null==t?void 0:t(c);case"childFunction":var s=r;return null==s?void 0:s(c);case"child":var u=r;if(u.type&&"string"==typeof u.type){var l=H(c,["targetRef"]);return(0,a.cloneElement)(u,l)}return(0,a.cloneElement)(u,c);case"childArray":return r.map((function(e){return!!e&&(0,a.cloneElement)(e,c)}));default:return a.createElement(o,null)}}}(a.PureComponent);var L=r(5086),U=r(840);const K=e=>({id:"root",name:"root",val:300,color:"day"===e?"rgb(5, 0, 232)":"rgb(248, 234, 24)"});var q=e=>{let{displayMode:t,slugs:r}=e;const{0:n,1:o}=(0,a.useState)();return(0,a.useEffect)((()=>{o(r.reduce(((e,r)=>{const n=r.split("/"),o=n.length-1,i=n[o].replaceAll("_"," ");return e.nodes=[...e.nodes,{id:r,name:i,val:100-40*o,color:"day"===t?"rgba(5, 0, 232,"+(1-(o+1)/10)+")":"rgba(248, 234, 24,"+(1-(o+1)/10)+")"}],e.links=[...e.links,{source:o?[...n].slice(0,-1).join("/"):"root",target:r}],e}),{nodes:[K(t)],links:[]}))}),[r,t]),{graphData:n}},V=r(4160);var G=()=>{const e=(0,V.useStaticQuery)(B),{0:t,1:r}=(0,a.useState)([]),{nodes:n}=e.allMarkdownRemark;return(0,a.useEffect)((()=>{const e=n.map((e=>{let{fields:{slug:t}}=e;return t.replace("/","")}));r(e)}),[n]),{slugs:t}};const B="378460340";var J,Q,Y=r(6646),X=r(9485),ee=r(6450),te=r(5893);const re=_((()=>Promise.all([r.e(737),r.e(917)]).then(r.bind(r,3917))));var ne=()=>{const{displayMode:e}=(0,Y.qp)(),{slugs:t}=G(),{graphData:r}=q({displayMode:e,slugs:t}),{width:n,ref:o}=function(e){var t=void 0===e?{}:e,r=t.skipOnMount,n=void 0!==r&&r,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions,u=t.handleWidth,l=void 0===u||u,f=t.handleHeight,d=void 0===f||f,p=t.targetRef,h=t.observerOptions,y=t.onResize,v=(0,a.useRef)(n),m=(0,a.useState)({width:void 0,height:void 0}),g=m[0],b=m[1],w=(0,a.useState)((null==p?void 0:p.current)||null),x=w[0],O=w[1];p&&setTimeout((function(){p.current!==x&&O(p.current)}),0);var k=(0,a.useCallback)((function(e){e!==x&&O(e)}),[x]);k.current=x,(0,a.useEffect)((function(){return function(){O(null),k.current=null}}),[]);var S=(0,a.useCallback)((function(e,t){return(e.width!==t.width||e.height!==t.height)&&!(e.width===t.width&&!d||e.height===t.height&&!l)}),[l,d]),j=(0,a.useCallback)((function(e){(l||d)&&(v.current?v.current=!1:e.forEach((function(e){var t=(null==e?void 0:e.contentRect)||{},r=t.width,n=t.height;b((function(e){return S(e,{width:r,height:n})?{width:r,height:n}:e}))})))}),[l,d,v,S]),R=(0,a.useCallback)(Z(j,o,c,s),[j,o,c,s]);return(0,a.useEffect)((function(){var e;return x?(e=new window.ResizeObserver(R)).observe(x,h):(g.width||g.height)&&b({width:void 0,height:void 0}),function(){var t,r,n;null===(t=null==e?void 0:e.disconnect)||void 0===t||t.call(e),null===(n=(r=R).cancel)||void 0===n||n.call(r)}}),[R,x]),(0,a.useEffect)((function(){null==y||y(g.width,g.height)}),[g]),D({ref:k},g)}({handleHeight:!1,refreshMode:"debounce",refreshRate:100}),{0:i,1:c}=(0,a.useState)(!0);if(!r)return null;return(0,te.jsxs)(oe,{ref:o,children:[(0,te.jsxs)(ie,{toggle:i,children:[(0,te.jsx)("span",{onClick:()=>c(!0),children:"GRAPH"}),(0,te.jsx)("span",{onClick:()=>c(!1),children:"LIST"})]}),i?(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{children:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan, Node-click: see the wiki"}),(0,te.jsx)(re,{width:n,height:460,graphData:r,onNodeClick:e=>{"root"!==e.id&&(0,C.c4)("/"+e.id)},backgroundColor:"day"===e?"#fff":"#000000",linkWidth:.3,linkOpacity:.4,nodeOpacity:.8,nodeResolution:100,nodeRelSize:2,showNavInfo:!1})]}):(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("span",{children:"click to see the wiki"}),(0,te.jsx)("ul",{children:[...t].sort().map((e=>{const t=e.split("/"),r=t[t.length-1].replaceAll("_"," ");return(0,te.jsx)(ae,{depth:t.length-1,children:(0,te.jsx)(C.rU,{to:"/"+e,children:r})},r)}))})]}),(0,te.jsx)(U.Z,{})]})};const oe=L.styled.div.withConfig({displayName:"WikiIndex__Container",componentId:"sc-1s44hl3-0"})(["@media ","{max-width:780px;}width:100%;height:100%;overflow:hidden;.scene-tooltip{color:",";font-size:18px !important;font-weight:500;text-decoration:underline;}& > span{",";display:block;text-align:end;color:",";font-size:14px;line-height:24px;}"],X.U.widerThanTablet,(e=>{let{theme:t}=e;return t.default}),(0,ee.O3)(),(e=>{let{theme:t}=e;return t.mute})),ie=L.styled.div.withConfig({displayName:"WikiIndex__Title",componentId:"sc-1s44hl3-1"})(["",";",";font-weight:600;font-size:32px;width:100%;",";span + span{margin-left:40px;}& > span{cursor:pointer;height:100%;transform:translateY(1px);",";&:first-of-type{color:",";border-color:",";&:hover{color:",";}}&:last-of-type{color:",";border-color:",";&:hover{color:",";}}}"],(0,ee.fU)({justifyContent:"flex-end"}),(0,ee.O3)(),ee.Cg.bottom,ee.Cg.bottom,(e=>{let{toggle:t,theme:r}=e;return t?r.default:r.mute}),(e=>{let{toggle:t,theme:r}=e;return t?r.default:r.border}),(e=>{let{toggle:t,theme:r}=e;return t?r.default:r.link}),(e=>{let{toggle:t,theme:r}=e;return t?r.mute:r.default}),(e=>{let{toggle:t,theme:r}=e;return t?r.border:r.default}),(e=>{let{toggle:t,theme:r}=e;return t?r.link:r.default})),ae=L.styled.li.withConfig({displayName:"WikiIndex__List",componentId:"sc-1s44hl3-2"})(["padding-left:",";font-size:",";line-height:2rem;&::before{",";}& > a{text-decoration:none;padding:6px;border-radius:4px;&:hover{color:",";background-color:",";}}"],(e=>{let{depth:t}=e;return 32*t+"px"}),(e=>{let{depth:t}=e;return 20-2*t+"px"}),(e=>{let{depth:t}=e;return t>0?(0,L.css)(J||(J=(0,i.Z)(["\n            content: '- ';\n          "]))):(0,L.css)(Q||(Q=(0,i.Z)(["\n            content: '';\n          "])))}),(e=>{let{theme:t}=e;return t.index}),(e=>{let{theme:t}=e;return t.indexBg}));var ce=r(3009),se=()=>(0,te.jsx)(o.Z,{children:(0,te.jsx)(ne,{})});const ue=()=>{const{title:e,description:t,image:r,siteUrl:o,twitterUsername:i}=(0,ce.$)();return(0,te.jsx)(n.Z,{title:e,subtitle:"Wiki Index",description:t,image:r,url:o,twitterUsername:i})}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=p(r);o&&o!==h&&e(t,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=s(t),y=s(r),v=0;v<a.length;++v){var m=a[v];if(!(i[m]||n&&n[m]||y&&y[m]||c&&c[m])){var g=d(r,m);try{u(t,m,g)}catch(b){}}}}return t}},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},4239:function(e,t,r){var n=r(2705),o=r(9607),i=r(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},7561:function(e,t,r){var n=r(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:function(e,t,r){var n=r(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(s){}var o=a.call(e);return n&&(t?e[c]=r:delete e[c]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},3279:function(e,t,r){var n=r(3218),o=r(7771),i=r(4841),a=Math.max,c=Math.min;e.exports=function(e,t,r){var s,u,l,f,d,p,h=0,y=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=s,n=u;return s=u=void 0,h=t,f=e.apply(n,r)}function b(e){var r=e-p;return void 0===p||r>=t||r<0||v&&e-h>=l}function w(){var e=o();if(b(e))return x(e);d=setTimeout(w,function(e){var r=t-(e-p);return v?c(r,l-(e-h)):r}(e))}function x(e){return d=void 0,m&&s?g(e):(s=u=void 0,f)}function O(){var e=o(),r=b(e);if(s=arguments,u=this,p=e,r){if(void 0===d)return function(e){return h=e,d=setTimeout(w,t),y?g(e):f}(p);if(v)return clearTimeout(d),d=setTimeout(w,t),g(p)}return void 0===d&&(d=setTimeout(w,t)),f}return t=i(t)||0,n(r)&&(y=!!r.leading,l=(v="maxWait"in r)?a(i(r.maxWait)||0,t):l,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==d&&clearTimeout(d),h=0,s=p=u=d=void 0},O.flush=function(){return void 0===d?f:x(o())},O}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var n=r(4239),o=r(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(5639);e.exports=function(){return n.Date.now()}},3493:function(e,t,r){var n=r(3279),o=r(3218);e.exports=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}},4841:function(e,t,r){var n=r(7561),o=r(3218),i=r(3448),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=c.test(e);return r||s.test(e)?u(e.slice(2),r?2:8):a.test(e)?NaN:+e}},9921:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case c:case a:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case v:case y:case s:return e;default:return t}}case o:return t}}}function O(e){return x(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=v,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return O(e)||x(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===v},t.isMemo=function(e){return x(e)===y},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===c},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===c||e===a||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===g||e.$$typeof===b||e.$$typeof===w||e.$$typeof===m)},t.typeOf=x},9864:function(e,t,r){"use strict";e.exports=r(9921)},7326:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},7462:function(e,t,r){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},4578:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9611);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.Z)(e,t)}},9611:function(e,t,r){"use strict";function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-wiki-index-tsx-0900f521dccd09cc7a41.js.map