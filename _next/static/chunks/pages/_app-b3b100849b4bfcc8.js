(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7936)}])},9613:function(e,t,r){"use strict";r.d(t,{g:function(){return o}});var n=JSON.parse('{"anchor-nav:hero":"Maintainer Month","anchor-nav:about":"About","anchor-nav:get-involved":"Get involved","anchor-nav:events":"Schedule","anchor-nav:connection":"Connection","event-type:podcast":"Podcast","event-type:stream":"Stream","event-type:talk":"Talk","event-type:meetup":"Meetup","event-type:fundraising":"Fundraising","event-type:conference":"Conference","event-type:misc":"Misc","footer:copyright":"Made with \u2665\ufe0e\ufe0f by GitHub","footer:privacy-title":"Privacy terms and conditions","footer:privacy-url":"#","footer:repository-title":"Repository","footer:repository-url":"#","footer:twitter-label":"Follow us on Twitter","footer:twitter-url":"https://twitter.com/github","footer:facebook-label":"Follow us on Facebook","footer:facebook-url":"https://www.facebook.com/GitHub/","footer:youtube-label":"Follow us on YouTube","footer:youtube-url":"https://www.youtube.com/github","footer:linkedin-label":"Follow us on LinkedIn","footer:linkedin-url":"https://www.linkedin.com/company/github","footer:github-label":"Follow us on GitHub","footer:github-url":"https://github.com/","library:title":"Library","library:description":"Library description","meta:title":"Maintainer Month","meta:description":"Maintainer Month Description","message:tbd":"TBD","navigation:schedule":"Schedule","navigation:library":"Library","page:title":"Maintainer Month","page:title-mobile":"MM","page:date":"June 2022","schedule:title":"Schedule","schedule:description":"Schedule description","timezone:utc":"UTC","timezone:pt":"PT"}'),o=function(e){return n[e]}},6724:function(e,t,r){"use strict";r.d(t,{Sd:function(){return o},$L:function(){return i},Ks:function(){return a}});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.parent,n=void 0===r?o:r;return{path:e,parent:n,linkTo:function(t){return{pathname:e,query:t}}}},o=n("/",{parent:null}),i=n("/schedule"),a=n("".concat(i.path,"/[slug]"),{parent:i});n("/library")},5512:function(e,t,r){"use strict";r.d(t,{E:function(){return a},h:function(){return l}});var n=r(5893),o=r(7294),i=(0,o.createContext)(),a=function(e){var t=e.children,r=(0,o.useState)(0),a={animationStep:r[0],setAnimationStep:r[1]};return(0,n.jsx)(i.Provider,{value:a,children:t})},l=function(){var e=(0,o.useContext)(i);if(void 0===e)throw new Error("useBackground must be used within a BackgroundProvider");return e}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),u=r(387),c=r(7190);var s={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),i=a.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,h=i.as,p=e.children,v=e.replace,g=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var C=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,y=o(c.useIntersection({rootMargin:"200px"}),2),w=y[0],j=y[1],x=a.default.useCallback((function(e){w(e),C&&("function"===typeof C?C(e):"object"===typeof C&&(C.current=e))}),[C,w]);a.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(n,d,h,{locale:t})}),[h,d,j,m,r,n]);var _={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:a}))}(e,n,d,h,v,g,b,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof m?m:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(h,k,n&&n.locales,n&&n.domainLocales);_.href=M||l.addBasePath(l.addLocale(h,k,n&&n.defaultLocale))}return a.default.cloneElement(t,_)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(t?t.current:null),2),v=p[0],g=p[1],b=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&g(t.current)}),[t]),[b,d]};var i=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},7936:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(5893),o=(r(7332),r(6010)),i=r(5512),a=r(9613),l=function(){return(0,n.jsx)("svg",{className:"icon-twitter",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7.92039C19.4485 8.16155 18.8551 8.32397 18.2326 8.3973C18.8681 8.02227 19.356 7.42872 19.5855 6.72147C18.9916 7.06894 18.3321 7.32044 17.6317 7.45677C17.0702 6.86814 16.2697 6.5 15.3853 6.5C13.6859 6.5 12.308 7.85641 12.308 9.52928C12.308 9.76651 12.3355 9.99783 12.388 10.2198C9.83018 10.0938 7.56283 8.8875 6.04493 7.05467C5.77995 7.50205 5.62846 8.02227 5.62846 8.57744C5.62846 9.62821 6.17092 10.5555 6.99737 11.0988C6.4924 11.0831 6.01843 10.9467 5.60296 10.7198V10.7577C5.60296 12.2259 6.66439 13.4499 8.07129 13.7289C7.81331 13.7978 7.54133 13.8352 7.26085 13.8352C7.06236 13.8352 6.86937 13.8161 6.68139 13.7806C7.07286 14.984 8.20979 15.86 9.5562 15.8846C8.50327 16.6967 7.17635 17.1815 5.73445 17.1815C5.48547 17.1815 5.24048 17.1672 5 17.1387C6.36191 17.998 7.9793 18.5 9.71718 18.5C15.3773 18.5 18.4726 13.884 18.4726 9.88118C18.4726 9.74977 18.4701 9.61886 18.4636 9.48942C19.0656 9.06124 19.5875 8.52773 20 7.92039Z",fill:"#000"})})},u=function(){return(0,n.jsx)("svg",{className:"icon-facebook",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M18.71 5.75H6.29C5.99131 5.75 5.75 5.99131 5.75 6.29V18.71C5.75 19.0087 5.99131 19.25 6.29 19.25H18.71C19.0087 19.25 19.25 19.0087 19.25 18.71V6.29C19.25 5.99131 19.0087 5.75 18.71 5.75ZM17.1508 9.69031H16.0724C15.227 9.69031 15.0633 10.0919 15.0633 10.6826V11.9836H17.0816L16.8183 14.0204H15.0633V19.25H12.959V14.0221H11.1989V11.9836H12.959V10.4818C12.959 8.73856 14.0238 7.7885 15.5797 7.7885C16.3256 7.7885 16.9651 7.84419 17.1524 7.8695V9.69031H17.1508Z",fill:"#000"})})},c=function(){return(0,n.jsx)("svg",{className:"icon-youtube",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21.0888 7.86815C20.9777 7.45938 20.7611 7.0893 20.4622 6.79725C20.1548 6.49622 19.7781 6.28089 19.3676 6.17158C17.8313 5.75418 12.4943 5.75418 12.4943 5.75418C9.92829 5.72409 8.18099 5.85644 5.63074 6.1505C5.22023 6.26789 4.84422 6.48803 4.53617 6.79135C4.23349 7.09154 4.01425 7.46172 3.89972 7.86731C3.6246 9.39502 3.49093 10.9462 3.5005 12.5C3.49069 14.0524 3.62403 15.6031 3.89972 17.1327C4.01179 17.5366 4.23022 17.9051 4.53372 18.2027C4.83722 18.5004 5.21516 18.7154 5.63074 18.8293C7.18751 19.2458 12.4943 19.2458 12.4943 19.2458C15.0635 19.2759 16.8141 19.1436 19.3676 18.8495C19.7781 18.7402 20.1548 18.5248 20.4622 18.2238C20.761 17.9318 20.9773 17.5617 21.088 17.1529C21.3703 15.6258 21.5076 14.074 21.4979 12.5194C21.5191 10.9582 21.382 9.39993 21.0888 7.86815ZM10.5375 15.3872V9.61363L15.6585 12.5008L10.5375 15.3872Z",fill:"#000"})})},s=function(){return(0,n.jsxs)("svg",{className:"icon-linkedin",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99039 7.22102C8.99039 8.02296 8.37977 8.67196 7.42487 8.67196C6.50718 8.67196 5.89657 8.02296 5.91547 7.22102C5.89657 6.3801 6.50717 5.75 7.44317 5.75C8.37976 5.75 8.97208 6.3801 8.99039 7.22102ZM5.99224 19.1592V9.81818H8.8953V19.1586H5.99224V19.1592Z",fill:"#000"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2223 12.7992C11.2223 11.6341 11.1839 10.6408 11.1455 9.81938H13.6671L13.8011 11.0991H13.8584C14.2405 10.5068 15.1954 9.60974 16.7426 9.60974C18.6524 9.60974 20.085 10.8705 20.085 13.6201V19.1604H17.1819V13.9838C17.1819 12.7797 16.7621 11.9589 15.7115 11.9589C14.909 11.9589 14.4318 12.5128 14.2411 13.0472C14.1643 13.2386 14.1265 13.5055 14.1265 13.7736V19.1604H11.2235V12.7992H11.2223Z",fill:"#000"})]})},f=function(){return(0,n.jsx)("svg",{className:"icon-github",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 5C8.35625 5 5 8.44114 5 12.6897C5 16.0924 7.14687 18.9664 10.1281 19.9853C10.5031 20.0526 10.6438 19.8219 10.6438 19.62C10.6438 19.4374 10.6344 18.8319 10.6344 18.1878C8.75 18.5435 8.2625 17.7168 8.1125 17.2843C8.02813 17.0632 7.6625 16.3808 7.34375 16.1981C7.08125 16.0539 6.70625 15.6983 7.33437 15.6887C7.925 15.6791 8.34687 16.2462 8.4875 16.4769C9.1625 17.6399 10.2406 17.3131 10.6719 17.1113C10.7375 16.6115 10.9344 16.275 11.15 16.0828C9.48125 15.8905 7.7375 15.2273 7.7375 12.286C7.7375 11.4497 8.02813 10.7577 8.50625 10.2194C8.43125 10.0271 8.16875 9.23895 8.58125 8.18161C8.58125 8.18161 9.20937 7.97976 10.6438 8.96981C11.2438 8.79679 11.8813 8.71028 12.5188 8.71028C13.1562 8.71028 13.7938 8.79679 14.3938 8.96981C15.8281 7.97015 16.4563 8.18161 16.4563 8.18161C16.8688 9.23895 16.6062 10.0271 16.5312 10.2194C17.0094 10.7577 17.3 11.4401 17.3 12.286C17.3 15.2369 15.5469 15.8905 13.8781 16.0828C14.15 16.3231 14.3844 16.7845 14.3844 17.5054C14.3844 18.5339 14.375 19.3605 14.375 19.62C14.375 19.8219 14.5156 20.0622 14.8906 19.9853C17.8531 18.9664 20 16.0828 20 12.6897C20 8.44114 16.6438 5 12.5 5Z",fill:"#000"})})},d=function(){return(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsxs)("div",{className:"footer__copyright",children:[(0,n.jsx)("a",{className:"footer__link",href:(0,a.g)("footer:repository-url"),target:"_blank",rel:"noreferrer",children:(0,a.g)("footer:repository-title")}),(0,n.jsx)("span",{className:"footer__divider"}),(0,n.jsx)("p",{children:(0,a.g)("footer:copyright")})]}),(0,n.jsxs)("div",{className:"footer__links",children:[(0,n.jsxs)("div",{className:"footer__social",children:[(0,n.jsx)("a",{className:"footer__button",href:(0,a.g)("footer:twitter-url"),target:"_blank",rel:"noreferrer","aria-label":(0,a.g)("footer:twitter-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(l,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,a.g)("footer:facebook-url"),target:"_blank",rel:"noreferrer","aria-label":(0,a.g)("footer:facebook-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(u,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,a.g)("footer:youtube-url"),target:"_blank",rel:"noreferrer","aria-label":(0,a.g)("footer:youtube-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(c,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,a.g)("footer:linkedin-url"),target:"_blank",rel:"noreferrer","aria-label":(0,a.g)("footer:linkedin-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(s,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,a.g)("footer:github-url"),target:"_blank",rel:"noreferrer","aria-label":(0,a.g)("footer:github-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(f,{})})})]}),(0,n.jsx)("a",{className:"footer__link",href:(0,a.g)("footer:privacy-url"),target:"_blank",rel:"noreferrer",children:(0,a.g)("footer:privacy-title")})]})]})},h=r(7294),p=r(1664),v=r(1163),g=r(6724);var b=function(){var e=(0,h.useState)({width:void 0,height:void 0}),t=e[0],r=e[1];return(0,h.useEffect)((function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t},m=function(){return(0,n.jsx)("svg",{className:"github-logo",height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})},C=function(){return(0,n.jsx)("svg",{className:"icon-calendar",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V5.25H6C4.75736 5.25 3.75 6.25736 3.75 7.5V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V7.5C20.25 6.25736 19.2426 5.25 18 5.25H15.75V3.75C15.75 3.33579 15.4142 3 15 3C14.5858 3 14.25 3.33579 14.25 3.75V5.25H9.75V3.75ZM5.25 10.5V18C5.25 18.4142 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18V10.5L5.25 10.5ZM18.75 9L5.25 9V7.5C5.25 7.08579 5.58579 6.75 6 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5V9Z",fill:"#000"})})},y=700;var w=function(){var e,t,r,i=(0,v.useRouter)().pathname,l=b().width,u=(0,h.useMemo)((function(){return i===g.Sd.path}),[i]),c=(0,h.useState)(u),s=c[0],f=c[1],d=(0,o.Z)("header__chip",{hide:s}),w=(0,h.useMemo)((function(){return l<y}),[l]);return(0,h.useEffect)((function(){if(u){f(!0);var e=function(e){var t=e.target.scrollingElement.clientHeight,r=e.target.scrollingElement.scrollTop;f(!(r>t/2))};return f(!0),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}f(!1)}),[u]),(0,n.jsx)("header",{className:"header",children:(0,n.jsxs)("div",{className:"header__content",children:[(0,n.jsxs)("div",{className:"header__logo",children:[(0,n.jsx)(p.default,{href:g.Sd.path,children:(0,n.jsxs)("a",{className:"header__home-link",children:[(0,n.jsx)(m,{}),(0,a.g)(w?"page:title-mobile":"page:title")]})}),(0,n.jsx)("p",{className:d,children:(0,a.g)("page:date")})]}),(0,n.jsx)("nav",{className:"header__navigation",children:(0,n.jsx)("ul",{className:"header__list",children:(0,n.jsx)("li",{children:(0,n.jsx)(p.default,{href:g.$L.path,"aria-label":(0,a.g)("navigation:schedule"),children:(0,n.jsxs)("a",{className:(0,o.Z)("header__link",(e={},t="is-active",r=i===g.$L.path,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e)),children:[(0,n.jsx)(C,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,a.g)("navigation:schedule")})]})})})})})]})})},j=function(){return(0,n.jsx)("svg",{id:"noise-filter-wrapper",children:(0,n.jsx)("filter",{id:"noise-filter",children:(0,n.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:"6.29",numOctaves:"6",stitchTiles:"stitch"})})})};var x=function(e){var t,r,a,l=e.children,u=(0,i.h)().animationStep,c=(0,o.Z)("layout",(t={},r="step-".concat(u),a=!0,r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{}),(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("div",{className:"layout__content",children:[(0,n.jsx)(w,{}),(0,n.jsx)("main",{children:l}),(0,n.jsx)(d,{})]})})]})};function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}var M=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsx)(i.E,{children:(0,n.jsx)(x,{children:(0,n.jsx)(t,k({},r))})})}},7332:function(){},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);