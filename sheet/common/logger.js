"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.instanceLoggerOMM=void 0;var LoggerOMM=function(){function o(){}return o.prototype.log=function(o){console.log(String(o))},o.prototype.info=function(o){console.info(String(o))},o.prototype.warn=function(o){console.warn(String(o))},o.prototype.error=function(o){console.error(String(o))},o}();Object.freeze(LoggerOMM),exports.instanceLoggerOMM=new LoggerOMM;