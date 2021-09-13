"use strict";var __extends=this&&this.__extends||function(){var o=function(r,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])})(r,t)};return function(r,t){function e(){this.constructor=r}o(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var is_1=require("./is"),logger_1=require("./logger"),ErrorOMM=function(o){function n(r,t){var e=o.call(this)||this;return Object.setPrototypeOf(e,n.prototype),e.previous=t,e.message=Array.isArray(r)?r.join("\n"):r,e}return __extends(n,o),n.new=function(r,t){return new n(r,t)},n.withPrev=function(r,t){return new n(r,t)},n.prototype.joinErrors=function(r,t){return is_1.IsNon(t)?r:(r.push((null===t||void 0===t?void 0:t.message)||""),this.joinErrors(r,null===t||void 0===t?void 0:t.previous))},n.prototype.printStack=function(){var r=this.joinErrors([],this).map(function(r){return"💥 "+r+" \n"}).reverse().join("");logger_1.instanceLoggerOMM.error("\n"+r+"\n")},n.prototype.toString=function(){logger_1.instanceLoggerOMM.error(this.message)},n}(Error);exports.ErrorOMM=ErrorOMM,Object.freeze(ErrorOMM);