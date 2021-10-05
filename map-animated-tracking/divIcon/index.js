"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDivIcon = function (angle, isMoving, color) { return ("\n    <div \n      style=\"transform: rotate(" + (angle || 0) + "deg); border-color:" + color + ";\"\n      class=\"mrkr " + (isMoving ? 'marker-mving ' : '') + "\"\n    >\n        <div class=\"" + (isMoving ? 'mving ' : 'not_mving') + "\"></div>\n    </div>\n  "); };
