
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([2],{232:function(e,n,t){e.exports=t(233)},233:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(4),r=i(o),s=t(1),a=i(s),l=t(2),c=i(l),u=t(5),p=i(u),d=t(6),f=i(d),h="D:\\Matt\\Downloads\\New folder\\work-dont touch\\cdd\\pages\\_document.js?entry",m=t(0),g=i(m),_=t(234),b=i(_),x=t(250),k=i(x),v=function(e){function n(){return(0,a.default)(this,n),(0,p.default)(this,(n.__proto__||(0,r.default)(n)).apply(this,arguments))}return(0,f.default)(n,e),(0,c.default)(n,[{key:"render",value:function(){return g.default.createElement("html",{lang:"en",__source:{fileName:h,lineNumber:18}},g.default.createElement("title",{__source:{fileName:h,lineNumber:19}},"Chronologic chronos dapp"),g.default.createElement("link",{rel:"shortcut icon",href:"/chronos-dapp/favicon.ico",type:"image/x-icon",__source:{fileName:h,lineNumber:20}}),g.default.createElement("body",{__source:{fileName:h,lineNumber:21}},g.default.createElement("style",{dangerouslySetInnerHTML:{__html:k.default},__source:{fileName:h,lineNumber:22}}),this.props.customValue,g.default.createElement(_.Main,{__source:{fileName:h,lineNumber:24}}),g.default.createElement(_.NextScript,{__source:{fileName:h,lineNumber:25}})))}}],[{key:"getInitialProps",value:function(e){var n=e.renderPage,t=n();return{html:t.html,head:t.head,errorHtml:t.errorHtml,chunks:t.chunks}}}]),n}(b.default);n.default=v},234:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return"/"===e?"/index.js":e+".js"}Object.defineProperty(n,"__esModule",{value:!0}),n.NextScript=n.Main=n.Head=void 0;var r=t(18),s=i(r),a=t(4),l=i(a),c=t(1),u=i(c),p=t(2),d=i(p),f=t(5),h=i(f),m=t(6),g=i(m),_=t(0),b=i(_),x=t(7),k=i(x),v=t(235),y=i(v),w=t(236),S=i(w),z=function(e){function n(){return(0,u.default)(this,n),(0,h.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,g.default)(n,e),(0,d.default)(n,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return b.default.createElement("html",null,b.default.createElement(A,null),b.default.createElement("body",null,b.default.createElement(E,null),b.default.createElement(C,null)))}}],[{key:"getInitialProps",value:function(e){var n=e.renderPage,t=n();return{html:t.html,head:t.head,errorHtml:t.errorHtml,chunks:t.chunks,styles:(0,S.default)()}}}]),n}(_.Component);z.childContextTypes={_documentProps:k.default.any},n.default=z;var A=n.Head=function(e){function n(){return(0,u.default)(this,n),(0,h.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,g.default)(n,e),(0,d.default)(n,[{key:"getChunkPreloadLink",value:function(e){var n=this.context._documentProps.__NEXT_DATA__,t=n.buildStats,i=n.assetPrefix,o=n.buildId,r=t?t[e].hash:o;return b.default.createElement("link",{key:e,rel:"preload",href:i+"/_next/"+r+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,n=e.chunks,t=e.__NEXT_DATA__,i=t.assetPrefix,o=t.buildId;return n.map(function(e){return b.default.createElement("link",{key:e,rel:"preload",href:i+"/_next/"+o+"/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,n=e.head,t=e.styles,i=e.__NEXT_DATA__,r=i.pathname,s=i.buildId,a=i.assetPrefix,l=o(r);return b.default.createElement("head",this.props,(n||[]).map(function(e,n){return b.default.cloneElement(e,{key:n})}),b.default.createElement("link",{rel:"preload",href:a+"/_next/"+s+"/page"+l,as:"script"}),b.default.createElement("link",{rel:"preload",href:a+"/_next/"+s+"/page/_error.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),t||null,this.props.children)}}]),n}(_.Component);A.contextTypes={_documentProps:k.default.any};var E=n.Main=function(e){function n(){return(0,u.default)(this,n),(0,h.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,g.default)(n,e),(0,d.default)(n,[{key:"render",value:function(){var e=this.context._documentProps,n=e.html,t=e.errorHtml,i=this.props.className;return b.default.createElement("div",{className:i},b.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:n}}),b.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:t}}))}}]),n}(_.Component);E.propTypes={className:k.default.string},E.contextTypes={_documentProps:k.default.any};var C=n.NextScript=function(e){function n(){return(0,u.default)(this,n),(0,h.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,g.default)(n,e),(0,d.default)(n,[{key:"getChunkScript",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this.context._documentProps.__NEXT_DATA__,i=t.buildStats,o=t.assetPrefix,r=t.buildId,a=i?i[e].hash:r;return b.default.createElement("script",(0,s.default)({key:e,type:"text/javascript",src:o+"/_next/"+a+"/"+e},n))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,n=e.chunks,t=e.__NEXT_DATA__,i=t.assetPrefix,o=t.buildId;return b.default.createElement("div",null,n.map(function(e){return b.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:i+"/_next/"+o+"/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,n=e.staticMarkup,t=e.__NEXT_DATA__,i=e.chunks,r=t.pathname,s=t.buildId,a=t.assetPrefix,l=o(r);return t.chunks=i,b.default.createElement("div",null,n?null:b.default.createElement("script",{nonce:this.props.nonce,dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,y.default)(t)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),b.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+r,type:"text/javascript",src:a+"/_next/"+s+"/page"+l}),b.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:a+"/_next/"+s+"/page/_error.js"}),n?null:this.getDynamicChunks(),n?null:this.getScripts())}}]),n}(_.Component);C.propTypes={nonce:k.default.string},C.contextTypes={_documentProps:k.default.any}},235:function(e,n,t){"use strict";function i(e){return r[e]}function o(e){return a[e]}var r={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},s=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(s,i)};var a={"\u2028":"\\u2028","\u2029":"\\u2029"},l=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(l,o)}},236:function(e,n,t){e.exports=t(237)},237:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=(0,d.flush)(),n=[],t=!0,i=!1,o=void 0;try{for(var r,s=(0,c.default)(e);!(t=(r=s.next()).done);t=!0){var l=(0,a.default)(r.value,2),u=l[0],f=l[1];n.push(p.default.createElement("style",{id:"__"+u,key:"__"+u,dangerouslySetInnerHTML:{__html:f}}))}}catch(e){i=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(i)throw o}}return n}function r(){var e=(0,d.flush)(),n="",t=!0,i=!1,o=void 0;try{for(var r,s=(0,c.default)(e);!(t=(r=s.next()).done);t=!0){var l=(0,a.default)(r.value,2);n+='<style id="__'+l[0]+'">'+l[1]+"</style>"}}catch(e){i=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(i)throw o}}return n}Object.defineProperty(n,"__esModule",{value:!0});var s=t(44),a=i(s),l=t(80),c=i(l);n.default=o,n.flushToHTML=r;var u=t(0),p=i(u),d=t(238)},238:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=y.cssRules();return y.flush(),new s.default(e)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(239),s=i(r),a=t(44),l=i(a),c=t(4),u=i(c),p=t(1),d=i(p),f=t(2),h=i(f),m=t(5),g=i(m),_=t(6),b=i(_);n.flush=o;var x=t(0),k=t(245),v=i(k),y=new v.default,w=function(e){function n(){return(0,d.default)(this,n),(0,g.default)(this,(n.__proto__||(0,u.default)(n)).apply(this,arguments))}return(0,b.default)(n,e),(0,h.default)(n,[{key:"componentWillMount",value:function(){y.add(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.css!==e.css}},{key:"componentWillUpdate",value:function(e){y.update(this.props,e)}},{key:"componentWillUnmount",value:function(){y.remove(this.props)}},{key:"render",value:function(){return null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var n=(0,l.default)(e,2),t=n[0],i=n[1];return y.computeId(t,i)}).join(" ")}}]),n}(x.Component);n.default=w},239:function(e,n,t){e.exports={default:t(240),__esModule:!0}},240:function(e,n,t){t(69),t(35),t(39),t(241),t(242),t(243),t(244),e.exports=t(8).Map},241:function(e,n,t){"use strict";var i=t(130),o=t(100);e.exports=t(131)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var n=i.getEntry(o(this,"Map"),e);return n&&n.v},set:function(e,n){return i.def(o(this,"Map"),0===e?0:e,n)}},i,!0)},242:function(e,n,t){var i=t(11);i(i.P+i.R,"Map",{toJSON:t(132)("Map")})},243:function(e,n,t){t(133)("Map")},244:function(e,n,t){t(134)("Map")},245:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!e)throw new Error("StyleSheetRegistry: "+n+".")}Object.defineProperty(n,"__esModule",{value:!0});var r=t(137),s=i(r),a=t(1),l=i(a),c=t(2),u=i(c),p=t(248),d=i(p),f=t(249),h=i(f),m=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.styleSheet,i=void 0===t?null:t,o=n.optimizeForSpeed,r=void 0!==o&&o,s=n.isBrowser,a=void 0===s?"undefined"!=typeof window:s;(0,l.default)(this,e),this._sheet=i||new h.default({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return(0,u.default)(e,[{key:"add",value:function(e){var n=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=(0,s.default)(this._fromServer).reduce(function(e,n){return e[n]=0,e},{}));var t=this.getIdAndRules(e),i=t.styleId,o=t.rules;if(i in this._instancesCounts)return void(this._instancesCounts[i]+=1);var r=o.map(function(e){return n._sheet.insertRule(e)}).filter(function(e){return-1!==e});r.length>0&&(this._indices[i]=r,this._instancesCounts[i]=1)}},{key:"remove",value:function(e){var n=this,t=this.getIdAndRules(e),i=t.styleId;if(o(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var r=this._fromServer&&this._fromServer[i];r?(r.parentNode.removeChild(r),delete this._fromServer[i]):(this._indices[i].forEach(function(e){return n._sheet.deleteRule(e)}),delete this._indices[i]),delete this._instancesCounts[i]}}},{key:"update",value:function(e,n){this.add(n),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,n=this._fromServer?(0,s.default)(this._fromServer).map(function(n){return[n,e._fromServer[n]]}):[],t=this._sheet.cssRules();return n.concat((0,s.default)(this._indices).map(function(n){return[n,e._indices[n].map(function(e){return t[e].cssText}).join("\n")]}))}},{key:"createComputeId",value:function(){var e={};return function(n,t){if(!t)return"jsx-"+n;var i=String(t),o=n+i;return e[o]||(e[o]="jsx-"+(0,d.default)(n+"-"+i)),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,n={};return function(t,i){var o=t+i;return n[o]||(n[o]=i.replace(e,t)),n[o]}}},{key:"getIdAndRules",value:function(e){var n=this;if(e.dynamic){var t=this.computeId(e.styleId,e.dynamic);return{styleId:t,rules:Array.isArray(e.css)?e.css.map(function(e){return n.computeSelector(t,e)}):[this.computeSelector(t,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,n){return e[n.id.slice(2)]=n,e},{})}}]),e}();n.default=m},248:function(e,n){e.exports=function(e){for(var n=5381,t=e.length;t;)n=33*n^e.charCodeAt(--t);return n>>>0}},249:function(e,n,t){"use strict";(function(e){function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){if(!e)throw new Error("StyleSheet: "+n+".")}Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),s=i(r),a=t(2),l=i(a),c=e.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},p=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.name,i=void 0===t?"stylesheet":t,r=n.optimizeForSpeed,a=void 0===r?c:r,l=n.isBrowser,p=void 0===l?"undefined"!=typeof window:l;(0,s.default)(this,e),o(u(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=p,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0}return(0,l.default)(e,[{key:"setOptimizeForSpeed",value:function(e){o("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(c||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(n,t){return"number"==typeof t?e._serverSheet.cssRules[t]={cssText:n}:e._serverSheet.cssRules.push({cssText:n}),t},deleteRule:function(n){e._serverSheet.cssRules[n]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,n){if(o(u(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof n&&(n=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,n),this._rulesCount++;if(this._optimizeForSpeed){var t=this.getSheet();"number"!=typeof n&&(n=t.cssRules.length);try{t.insertRule(e,n)}catch(n){return c||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[n];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,n){if(this._optimizeForSpeed||!this._isBrowser){var t=this._isBrowser?this.getSheet():this._serverSheet;if(n.trim()||(n=this._deletedRulePlaceholder),!t.cssRules[e])return e;t.deleteRule(e);try{t.insertRule(n,e)}catch(i){c||console.warn("StyleSheet: illegal rule: \n\n"+n+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),t.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=n}return e}},{key:"deleteRule",value:function(e){if(!this._isBrowser)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var n=this._tags[e];o(n,"rule at index `"+e+"` not found"),n.parentNode.removeChild(n),this._tags[e]=null}}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(n,t){return t?n=n.concat(e.getSheetForTag(t).cssRules.map(function(n){return n.cssText===e._deletedRulePlaceholder?null:n})):n.push(null),n},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,n,t){n&&o(u(n),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");i.type="text/css",i.setAttribute("data-"+e,""),n&&i.appendChild(document.createTextNode(n));var r=document.head||document.getElementsByTagName("head")[0];return t?r.insertBefore(i,t):r.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}]),e}();n.default=p}).call(n,t(72))},250:function(e,n,t){"use strict";!function(){e.exports='.crowdsale, .process, .footer, .header {\n  left: 0;\n  right: 0; }\n\n.footer .logo {\n  display: block;\n  background-image: url(./static/logo_White.svg); }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .footer .logo {\n      background-image: "" url("./static/logo_White.svg");\n      background-size: 119px 60px; } }\n\n.crowdsale, .process {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  height: 50%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.home {\n  min-height: 600px; }\n\n.crowdsale {\n  top: 0;\n  padding-top: 80px;\n  text-align: center; }\n\n.crowdsale .container {\n    padding: 0 40px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n.crowdsale .title {\n    margin-bottom: 20px;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-weight: bold; }\n\n.crowdsale .description {\n    margin-bottom: 25px;\n    color: #8197a2;\n    line-height: 24px;\n    font-size: 13px; }\n\n.crowdsale .buttons {\n    font-size: 0; }\n\n.crowdsale .button {\n    margin-top: 32px;\n    margin-bottom: 96px;\n    padding-left: 56px;\n    padding-right: 56px; }\n\n@-webkit-keyframes show-process {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 1;\n    -webkit-transition: scale(1);\n    transition: scale(1); } }\n\n@keyframes show-process {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    opacity: 1;\n    -webkit-transition: scale(1);\n    transition: scale(1); } }\n\n.process {\n  bottom: 0;\n  padding-bottom: 60px;\n  background-color: #f5f5f7;\n  font-size: 0; }\n\n.process .step-icons {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    position: absolute;\n    left: 50%;\n    top: 0; }\n\n.process .step-icons_crowdsale-page {\n      top: 10px; }\n\n.process .process-item {\n    opacity: 0;\n    -webkit-animation-name: show-process;\n            animation-name: show-process;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    width: 20%;\n    padding: 130px 10px 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-align: center; }\n\n.process .process-item:nth-child(1) {\n      -webkit-animation-delay: 200ms;\n              animation-delay: 200ms; }\n\n.process .process-item:nth-child(1):after {\n        content: "1"; }\n\n.process .process-item:nth-child(2) {\n      -webkit-animation-delay: 400ms;\n              animation-delay: 400ms; }\n\n.process .process-item:nth-child(2):after {\n        content: "2"; }\n\n.process .process-item:nth-child(3) {\n      -webkit-animation-delay: 600ms;\n              animation-delay: 600ms; }\n\n.process .process-item:nth-child(3):after {\n        content: "3"; }\n\n.process .process-item:nth-child(4) {\n      -webkit-animation-delay: 800ms;\n              animation-delay: 800ms; }\n\n.process .process-item:nth-child(4):after {\n        content: "4"; }\n\n.process .process-item:nth-child(5) {\n      -webkit-animation-delay: 1000ms;\n              animation-delay: 1000ms; }\n\n.process .process-item:nth-child(5):after {\n        content: "5"; }\n\n.process .process-item:after {\n      position: absolute;\n      width: 32px;\n      height: 32px;\n      right: 28px;\n      top: -16px;\n      border-radius: 50%;\n      border: 4px solid #fff;\n      background-color: #2f4ffd;\n      color: #fff;\n      line-height: 32px;\n      text-align: center;\n      font-size: 14px;\n      font-weight: bold; }\n\n.process .title {\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: bold; }\n\n.process .description {\n    color: #8197a2;\n    line-height: 18px;\n    font-size: 12px; }\n\n.steps pre {\n  display: block;\n  overflow: auto;\n  height: 200px;\n  padding: 15px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  font-size: 14px;\n  word-break: break-all;\n  word-wrap: break-word;\n  white-space: pre-wrap; }\n\n.steps .button-container {\n  margin: 40px auto;\n  width: 960px; }\n\n.steps .guide-span {\n  display: block;\n  margin-top: 56px;\n  text-align: left; }\n\n.steps .value {\n  margin-bottom: 10px; }\n\n.steps .left,\n.steps .right,\n.steps .item {\n  margin-bottom: 25px; }\n\n.steps .description {\n  font-size: 0.75rem; }\n\n.steps .button {\n  padding-left: 30px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAAMFBMVEX///////////////////////////////////////////////////////////////9Or7hAAAAAD3RSTlMAPT5BSUpRUt3f5ufp6vUxUI2NAAAASUlEQVR42rWROw7AMAxC3abN3+b+t80WZYAxb/STsAR2kr0+xnAgEhMVwryhTLpjvg5CFOugTCXc/sGj1PM7d12irl0Plb3taRdkbQmzeFkz0wAAAABJRU5ErkJggg==);\n  background-size: 12px 10px;\n  background-repeat: no-repeat;\n  background-position: left 10px center;\n  cursor: pointer; }\n\n.about-step {\n  padding-top: 32px;\n  position: relative;\n  min-height: 161px; }\n\n.about-step .title {\n    color: white;\n    display: block;\n    margin-bottom: 10px;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 20px;\n    font-weight: bold; }\n\n.about-step .description {\n    color: white;\n    line-height: 20px;\n    font-size: 13px;\n    font-weight: bold;\n    text-align: center; }\n\n.step_token-setup {\n  background-image: url("./static/step-icons/token_setup_header.png");\n  background-repeat: no-repeat;\n  background-size: 960px, 161px; }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step_token-setup {\n      background-image: "" url("./static/step-icons/token_setup_header@2x.png");\n      background-size: 960px 161px; } }\n\n.step_timemint-setup {\n  background-image: url("./static/step-icons/timemint_setup_header.png");\n  background-repeat: no-repeat; }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step_timemint-setup {\n      background-image: "" url("./static/step-icons/timemint_setup_header@2x.png");\n      background-size: 960px 161px; } }\n\n.step_contract-setup {\n  background-image: url("./static/step-icons/contract_setup_header.png");\n  background-repeat: no-repeat; }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step_contract-setup {\n      background-image: "" url("./static/step-icons/contract_setup_header@2x.png");\n      background-size: 960px 161px; } }\n\n.step_publish {\n  background-image: url("./static/step-icons/publish_header.png");\n  background-repeat: no-repeat; }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step_publish {\n      background-image: "" url("./static/step-icons/publish_header@2x.png");\n      background-size: 960px 161px; } }\n\n.step_watch {\n  background-image: url("./static/step-icons/watch_page_header.png");\n  background-repeat: no-repeat; }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step_watch {\n      background-image: "" url("./static/step-icons/watch_page_header@2x.png");\n      background-size: 960px 161px; } }\n\n.steps-content {\n  padding: 30px 30px 0;\n  border-radius: 8px;\n  border: 1px solid #eee;\n  background-color: #fff; }\n\n.steps-navigation {\n  margin-bottom: 30px;\n  padding: 30px 0;\n  border-bottom: 1px solid #eee;\n  background-color: #fff; }\n\n.steps-navigation .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.steps-navigation .step-navigation {\n    position: relative;\n    padding-left: 30px;\n    color: #8197a2;\n    text-transform: uppercase;\n    line-height: 20px;\n    font-size: 11px;\n    font-weight: bold; }\n\n.steps-navigation .step-navigation:nth-child(1):before {\n      content: "1"; }\n\n.steps-navigation .step-navigation:nth-child(2):before {\n      content: "2"; }\n\n.steps-navigation .step-navigation:nth-child(3):before {\n      content: "3"; }\n\n.steps-navigation .step-navigation:nth-child(4):before {\n      content: "4"; }\n\n.steps-navigation .step-navigation:nth-child(5):before {\n      content: "5"; }\n\n.steps-navigation .step-navigation:before {\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      left: 0;\n      top: 50%;\n      border-radius: 50%;\n      background-color: rgba(129, 151, 162, 0.4);\n      color: #fff;\n      line-height: 20px;\n      text-align: center;\n      font-size: 11px;\n      font-weight: bold; }\n\n.steps-navigation .step-navigation_active {\n      color: #333; }\n\n.steps-navigation .step-navigation_active:before {\n        background-color: #2f4ffd; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0; }\n\np, h1, h2, h3, h4 {\n  margin: 0;\n  padding: 0;\n  font-family: \'Open Sans\', sans-serif; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  position: relative;\n  width: 100%;\n  min-width: 1000px;\n  min-height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 80px 0 60px;\n  background-color: #fbfbfc; }\n\n.container {\n  width: 960px;\n  margin: 0 auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.left {\n  width: 46%;\n  float: left; }\n\n.right {\n  width: 46%;\n  float: right; }\n\n.col {\n  display: \'inline-block\'; }\n\n.col-3 {\n    width: 33%;\n    margin-right: 0.33%; }\n\n.center {\n  margin-left: auto;\n  margin-right: auto; }\n\n.text-center {\n  text-align: center; }\n\n.input-block-container {\n  display: table;\n  width: 100%; }\n\n.button {\n  display: inline-block;\n  -webkit-transition: 0.3s background-color,\r 0.3s color;\n  transition: 0.3s background-color,\r 0.3s color;\n  border: none;\n  border-radius: 32px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n  padding: 0 15px;\n  line-height: 36px;\n  font-size: 13px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n.button-container {\n    text-align: center; }\n\n.button_fill {\n    background-color: #2f4ffd;\n    color: #fff; }\n\n.button:disabled {\n  background: #2f4ffd;\n  /* The Fallback */\n  background: rgba(47, 79, 253, 0.7);\n  cursor: auto; }\n\n.label {\n  display: block;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n.label_info {\n    cursor: pointer;\n    position: relative;\n    bottom: -3px;\n    display: inline-block;\n    width: 15px;\n    height: 15px;\n    background-size: 100%;\n    margin: 0 6px;\n    background: url(./static/info.svg); }\n\n.loading {\n  display: block;\n  margin: 0 40%; }\n\n.loading_msg {\n    text-align: center;\n    margin: 0 auto 10px; }\n\n.loading_image {\n    text-align: center;\n    margin: 5px 40px; }\n\n.values {\n  display: block;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n.input {\n  -webkit-transition: 0.3s border-color;\n  transition: 0.3s border-color;\n  width: 100%;\n  height: 36px;\n  margin-bottom: 15px;\n  outline: none;\n  border: 1px solid #eee;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 3px;\n  padding: 0 10px;\n  color: #333;\n  font-size: 14px;\n  font-family: \'Open Sans\', sans-serif; }\n\n.input:focus {\n    border-color: #2f4ffd; }\n\n@font-face {\n  font-family: \'Open Sans\';\n  font-style: normal;\n  font-weight: 400;\n  src: local("Open Sans"), local("OpenSans"), url(https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n\n@font-face {\n  font-family: \'Open Sans\';\n  font-style: normal;\n  font-weight: 700;\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url(https://fonts.gstatic.com/s/opensans/v13/k3k702ZOKiLJc3WVjuplzBampu5_7CjHW5spxoeN3Vs.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; }\n\nhtml,\nbody {\n  color: #333;\n  line-height: 1;\n  font-size: 14px;\n  font-family: \'Open Sans\', sans-serif;\n  -webkit-font-smoothing: antialiased; }\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  height: 60px;\n  background-size: cover;\n  background: #2f4ffd center center;\n  color: #fff; }\n\n.footer .container {\n    position: relative; }\n\n.footer .logo,\n  .footer .socials {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    position: absolute;\n    z-index: 1;\n    top: 50%; }\n\n.footer .logo {\n    left: 0;\n    width: 100px;\n    height: 29px;\n    background-size: 100%;\n    background-position: 0 0; }\n\n.footer .rights {\n    color: #fff;\n    line-height: 60px;\n    text-align: center;\n    font-size: 12px; }\n\n.footer .socials {\n    right: 0; }\n\n.header {\n  position: absolute;\n  top: 0;\n  height: 80px;\n  background-size: cover;\n  background: center center; }\n\n.header .logo {\n    background-image: url(./static/colored-logo.png);\n    background-size: 119px 35px;\n    display: block;\n    width: 119px;\n    height: 35px;\n    margin-top: 22.5px; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: .2; }\n  20% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: .2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: .2; }\n  20% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    opacity: .2;\n    -webkit-transform: scale(0.3);\n            transform: scale(0.3); } }\n\n.socials {\n  font-size: 0; }\n\n.socials .social {\n    -webkit-transition: 0.3s background-color;\n    transition: 0.3s background-color;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.socials .social:not(:first-child) {\n      margin-left: 10px; }\n\n.socials .social:hover {\n      background-color: rgba(255, 255, 255, 0.4); }\n\n.socials .social:before {\n      /*@include image-2x(\'./static/socials@2x.png\', 16px, 69px);*/\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      content: \'\';\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      background-size: 100% 100%;\n      /*background-image: url(./static/socials.png);*/ }\n\n.socials .social_github:before {\n      width: 19px;\n      height: 20px;\n      background-image: url(./static/github.svg); }\n\n.socials .social_blog:before {\n      width: 16px;\n      height: 14px;\n      background-image: url(./static/medium.svg); }\n\n.socials .social_whitepaper:before {\n      width: 17px;\n      height: 19px;\n      background-image: url(./static/whitepaper.svg); }\n\n.socials .social_web:before {\n      width: 20px;\n      height: 20px;\n      background-image: url(./static/website.svg); }\n\n.socials .social_help:before {\n      width: 18px;\n      height: 18px;\n      background-image: url(./static/support.svg); }\n\n.step-icons {\n  background-image: url(./static/step-icons.png); }\n\n@media (min--moz-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .step-icons {\n      background-image: "" url("./static/step-icons@2x.png");\n      background-size: 120px 600px; } }\n\n.step-icons_token-setup {\n    width: 120px;\n    height: 120px;\n    background-position: 0 0; }\n\n.step-icons_timemint-setup {\n    width: 120px;\n    height: 120px;\n    background-position: 0 -120px; }\n\n.step-icons_contract-setup {\n    width: 120px;\n    height: 120px;\n    background-position: 0 -240px; }\n\n.step-icons_publish {\n    width: 120px;\n    height: 120px;\n    background-position: 0 -360px; }\n\n.step-icons_watch {\n    width: 120px;\n    height: 120px;\n    background-position: 0 -480px; }\n'}()}},[232]);
            return { page: comp.default }
          })
        