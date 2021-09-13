"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.UUID = UUID;
function UUID_NUM() {
    return new Date().getTime() + Math.floor(Math.random() * 100) + 1;
}
exports.UUID_NUM = UUID_NUM;
