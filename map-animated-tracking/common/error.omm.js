"use strict";var __extends=this&&this.__extends||function(){var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)t.hasOwnProperty(o)&&(r[o]=t[o])})(t,o)};return function(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();Object.defineProperty(exports,"__esModule",{value:!0});var is_1=require("./is"),logger_1=require("./logger"),ErrorOMM=function(r){function t(o,e){var n=r.call(this)||this;return Object.setPrototypeOf(n,t.prototype),n.previous=e,n.message=Array.isArray(o)?o.join("\n"):o,n}return __extends(t,r),t.new=function(r,o){return new t(r,o)},t.withPrev=function(r,o){return new t(r,o)},t.prototype.joinErrors=function(r,t){var o,e;return is_1.IsNon(t)?r:(r.push((null===(o=t)||void 0===o?void 0:o.message)||""),this.joinErrors(r,null===(e=t)||void 0===e?void 0:e.previous))},t.prototype.printStack=function(){var r=this.joinErrors([],this).map(function(r){return"💥 "+r+" \n"}).reverse().join("");return logger_1.loggerOMM.error("\n"+r+"\n"),this},t.prototype.toString=function(){return logger_1.loggerOMM.error(this.message),this},t.prototype.throw=function(){throw this},t}(Error);exports.ErrorOMM=ErrorOMM,Object.freeze(ErrorOMM);