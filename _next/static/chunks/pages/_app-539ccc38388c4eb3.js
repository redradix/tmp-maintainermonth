(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6196)}])},9613:function(e,r,t){"use strict";t.d(r,{g:function(){return o}});var n=JSON.parse('{"footer:copyright":"Made with \u2764\ufe0f by GitHub","footer:email":"opensource@github.com","footer:terms-title":"Terms","footer:terms-url":"#","footer:privacy-title":"Privacy","footer:privacy-url":"#","footer:repository-title":"Repository","footer:repository-url":"#","footer:coc-title":"Code of Conduct","footer:coc-url":"#","meta:title":"Maintainer Month","meta:description":"Maintainer Month Description","navigation:schedule":"Schedule","navigation:resources":"Resources","page:title":"Maintainer Month","page:title-mobile":"MM","page:date":"June 2022","resources:title":"Resources","resources:description":"Resources description","schedule:title":"Schedule","schedule:description":"Schedule description"}'),o=function(e){return n[e]}},6724:function(e,r,t){"use strict";t.d(r,{Q:function(){return n}});var n=function(e){return"".concat("/tmp-maintainermonth").concat(e)}},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},l=t(6273),s=t(387),c=t(7190);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=s.useRouter(),i=a.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],i=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):i||t}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,v=e.replace,g=e.shallow,y=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var x=(r=a.default.Children.only(p))&&"object"===typeof r&&r.ref,j=o(c.useIntersection({rootMargin:"200px"}),2),k=j[0],b=j[1],w=a.default.useCallback((function(e){k(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,k]);a.default.useEffect((function(){var e=b&&t&&l.isLocalURL(d),r="undefined"!==typeof m?m:n&&n.locale,o=u[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(n,d,h,{locale:r})}),[h,d,b,m,t,n]);var _={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,i,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:i,locale:s,scroll:a}))}(e,n,d,h,v,g,y,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof m?m:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(h,L,n&&n.locales,n&&n.domainLocales);_.href=M||l.addBasePath(l.addLocale(h,L,n&&n.defaultLocale))}return a.default.cloneElement(r,_)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!l,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(r?r.current:null),2),v=p[0],g=p[1],y=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=s.get(n):(r=s.get(t),c.push(t));if(r)return r;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(t,r={id:t,observer:i,elements:o}),r}(t),o=n.id,i=n.observer,a=n.elements;return a.set(e,r),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),s.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){r&&g(r.current)}),[r]),[y,d]};var i=t(7294),a=t(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},6196:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(5893),o=(t(7332),t(9613)),i=function(){return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsx)("p",{children:(0,o.g)("footer:copyright")}),(0,n.jsx)("a",{href:(0,o.g)("footer:terms-url"),target:"_blank",rel:"noreferrer",children:(0,o.g)("footer:terms-title")}),(0,n.jsx)("a",{href:(0,o.g)("footer:privacy-url"),target:"_blank",rel:"noreferrer",children:(0,o.g)("footer:privacy-title")}),(0,n.jsx)("a",{href:"mailto:".concat((0,o.g)("footer:email")),target:"_blank",rel:"noreferrer",children:(0,o.g)("footer:email")}),(0,n.jsx)("a",{href:(0,o.g)("footer:repository-url"),target:"_blank",rel:"noreferrer",children:(0,o.g)("footer:repository-title")}),(0,n.jsx)("a",{href:(0,o.g)("footer:coc-url"),target:"_blank",rel:"noreferrer",children:(0,o.g)("footer:coc-title")})]})},a=t(7294),l=t(1664),s=t(6724);var c=function(){var e=(0,a.useState)({width:void 0,height:void 0}),r=e[0],t=e[1];return(0,a.useEffect)((function(){var e=function(){t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r},u=function(){return(0,n.jsx)("svg",{className:"github-logo",height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})},f=function(){return(0,n.jsxs)("svg",{className:"icon-calendar",width:"192",height:"192",viewBox:"0 0 256 256",children:[(0,n.jsx)("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})},d=function(){return(0,n.jsxs)("svg",{className:"icon-books",width:"192",height:"192",fill:"#000000",viewBox:"0 0 256 256",children:[(0,n.jsx)("rect",{x:"40",y:"40",width:"48",height:"176",rx:"8",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"40",y1:"80",x2:"88",y2:"80",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("rect",{x:"88",y:"40",width:"48",height:"176",rx:"8",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"88",y1:"176",x2:"136",y2:"176",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("rect",{x:"158",y:"38.6",width:"48",height:"176",rx:"8",transform:"matrix(0.97, -0.26, 0.26, 0.97, -26.56, 51.42)",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"171.2",y1:"179.2",x2:"217.6",y2:"166.7",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),(0,n.jsx)("line",{x1:"146.4",y1:"86.4",x2:"192.8",y2:"74",fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})},h=700,p=function(){var e=c().width,r=(0,a.useMemo)((function(){return e<h}),[e]);return(0,n.jsx)("header",{className:"header",children:(0,n.jsxs)("div",{className:"header__content",children:[(0,n.jsxs)("div",{className:"header__logo",children:[(0,n.jsx)(l.default,{href:(0,s.Q)("/"),children:(0,n.jsxs)("a",{className:"header__home-link",children:[(0,n.jsx)(u,{}),(0,o.g)(r?"page:title-mobile":"page:title")]})}),(0,n.jsx)("p",{className:"header__chip",children:(0,o.g)("page:date")})]}),(0,n.jsx)("nav",{className:"header__navigation",children:(0,n.jsxs)("ul",{className:"header__list",children:[(0,n.jsx)("li",{children:(0,n.jsx)(l.default,{href:(0,s.Q)("/schedule"),"aria-label":(0,o.g)("navigation:schedule"),children:(0,n.jsxs)("a",{className:"header__link",children:[(0,n.jsx)(f,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,o.g)("navigation:schedule")})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(l.default,{href:(0,s.Q)("/resources"),"aria-label":(0,o.g)("navigation:resources"),children:(0,n.jsxs)("a",{className:"header__link",children:[(0,n.jsx)(d,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,o.g)("navigation:resources")})]})})})]})})]})})},v=function(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{}),(0,n.jsx)("main",{children:r}),(0,n.jsx)(i,{})]})};function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){g(e,r,t[r])}))}return e}var m=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsx)(v,{children:(0,n.jsx)(r,y({},t))})}},7332:function(){},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);