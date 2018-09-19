"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_PluginRepository=_interopRequireDefault(require("./plugins/PluginRepository")),_SocketService=_interopRequireDefault(require("./services/SocketService")),_Plugin=_interopRequireDefault(require("./plugins/Plugin")),PluginTypes=_interopRequireWildcard(require("./plugins/PluginTypes"));var origin,_Blockchains=require("./models/Blockchains"),_Network=_interopRequireDefault(require("./models/Network")),throwNoAuth=function(){if(!holder.scatter.isExtension&&!_SocketService.default.isConnected())throw new Error("Connect and Authenticate first - scatter.connect( pluginName )")},checkForExtension=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;return 20<b?void 0:holder.scatter.isExtension?a(!0):void setTimeout(function(){return checkForExtension(a,b+1)},100)},Index=/*#__PURE__*/function(){function a(){(0,_classCallCheck2.default)(this,a),this.isExtension=!1,this.identity=null}return(0,_createClass2.default)(a,[{key:"loadPlugin",value:function loadPlugin(a){var b=this;if(!a.isValid())throw new Error("".concat(a.name," doesn't seem to be a valid ScatterJS plugin."));_PluginRepository.default.loadPlugin(a),a.isSignatureProvider()&&(this[a.name]=a.signatureProvider(function noIdFunc(){if(!b.identity)throw new Error("No Identity")}))}},{key:"isInstalled",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(){return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(a){setTimeout(function(){a(!1)},3e3),Promise.race([checkForExtension(a),_SocketService.default.ping().then(function(b){console.log("found",b),b&&a(!0)})])}));case 1:case"end":return a.stop();}},a,this)}));return function isInstalled(){return a.apply(this,arguments)}}()},{key:"connect",value:function(){var a=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b,c){var d=this;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(a){if(!b||!b.length)throw new Error("You must specify a name for this connection");// Setting options defaults
c=Object.assign({initTimeout:1e4,linkTimeout:3e4},c),setTimeout(function(){a(!1)},c.initTimeout),checkForExtension(a),_SocketService.default.init(b,c.linkTimeout),_SocketService.default.link().then(/*#__PURE__*/function(){var b=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function b(c){return _regenerator.default.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(c){b.next=2;break}return b.abrupt("return",!1);case 2:return b.next=4,d.getIdentityFromPermissions();case 4:return d.identity=b.sent,b.abrupt("return",a(!0));case 6:case"end":return b.stop();}},b,this)}));return function(){return b.apply(this,arguments)}}())}));case 1:case"end":return a.stop();}},a,this)}));return function connect(){return a.apply(this,arguments)}}()},{key:"disconnect",value:function disconnect(){return _SocketService.default.disconnect()}},{key:"isConnected",value:function isConnected(){return _SocketService.default.isConnected()}},{key:"isPaired",value:function isPaired(){return _SocketService.default.isPaired()}},{key:"getVersion",value:function getVersion(){return _SocketService.default.sendApiRequest({type:"getVersion",payload:{}})}},{key:"getIdentity",value:function getIdentity(a){var b=this;return throwNoAuth(),_SocketService.default.sendApiRequest({type:"getOrRequestIdentity",payload:{fields:a}}).then(function(a){return a&&(b.identity=a),a})}},{key:"getIdentityFromPermissions",value:function getIdentityFromPermissions(){var a=this;return throwNoAuth(),_SocketService.default.sendApiRequest({type:"identityFromPermissions",payload:{}}).then(function(b){return b&&(a.identity=b),b})}},{key:"forgetIdentity",value:function forgetIdentity(){var a=this;return throwNoAuth(),_SocketService.default.sendApiRequest({type:"forgetIdentity",payload:{}}).then(function(b){return a.identity=null,b})}},{key:"authenticate",value:function authenticate(){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"authenticate",payload:{}})}},{key:"getArbitrarySignature",value:function getArbitrarySignature(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",d=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];return throwNoAuth(),_SocketService.default.sendApiRequest({type:"requestArbitrarySignature",payload:{publicKey:a,data:b,whatfor:c,isHash:d}})}},{key:"getPublicKey",value:function getPublicKey(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"getPublicKey",payload:{blockchain:a}})}},{key:"linkAccount",value:function linkAccount(a,b,c){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"linkAccount",payload:{publicKey:a,account:b,network:c}})}},{key:"hasAccountFor",value:function hasAccountFor(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"hasAccountFor",payload:{network:a}})}},{key:"suggestNetwork",value:function suggestNetwork(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"requestAddNetwork",payload:{network:a}})}},{key:"requestTransfer",value:function requestTransfer(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return _SocketService.default.sendApiRequest({type:"requestTransfer",payload:{network:a,to:b,amount:c,options:d}})}},{key:"requestSignature",value:function requestSignature(a){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"requestSignature",payload:a})}},{key:"createTransaction",value:function createTransaction(a,b,c,d){return throwNoAuth(),_SocketService.default.sendApiRequest({type:"createTransaction",payload:{blockchain:a,actions:b,account:c,network:d}})}}]),a}(),Holder=/*#__PURE__*/function(){function a(b){(0,_classCallCheck2.default)(this,a),console.log(b),this.scatter=b}return(0,_createClass2.default)(a,[{key:"plugins",value:function plugins(){var a=this;if(!this.scatter.isExtension){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];c.map(function(b){return a.scatter.loadPlugin(b)})}}}]),a}(),holder=new Holder(new Index());Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"SocketService",{enumerable:!0,get:function get(){return _SocketService.default}}),Object.defineProperty(exports,"Plugin",{enumerable:!0,get:function get(){return _Plugin.default}}),Object.defineProperty(exports,"Blockchains",{enumerable:!0,get:function get(){return _Blockchains.Blockchains}}),Object.defineProperty(exports,"Network",{enumerable:!0,get:function get(){return _Network.default}}),exports.PluginTypes=exports.default=void 0;exports.PluginTypes=PluginTypes;if("undefined"!=typeof window){// Catching extension instead of Desktop
if("undefined"!=typeof document){var bindScatterClassic=function(){holder.scatter=window.scatter,holder.scatter.isExtension=!0,holder.scatter.connect=function(){return new Promise(function(a){return a(!0)})}};"undefined"==typeof window.scatter?document.addEventListener("scatterLoaded",function(){return bindScatterClassic()}):bindScatterClassic()}window.ScatterJS=holder}holder.Plugin=_Plugin.default,holder.PluginTypes=PluginTypes,holder.Blockchains=_Blockchains.Blockchains,holder.Network=_Network.default,holder.SocketService=_SocketService.default;var _default=holder;exports.default=_default;