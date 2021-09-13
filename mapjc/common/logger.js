"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerOMM = /** @class */ (function () {
    function LoggerOMM() {
    }
    LoggerOMM.prototype.log = function (message) {
        console.log(String(message));
    };
    LoggerOMM.prototype.info = function (message) {
        console.info(String(message));
    };
    LoggerOMM.prototype.warn = function (message) {
        console.warn(String(message));
    };
    LoggerOMM.prototype.error = function (message) {
        console.error(String(message));
    };
    return LoggerOMM;
}());
Object.freeze(LoggerOMM);
exports.instanceLoggerOMM = new LoggerOMM();
