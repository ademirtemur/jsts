"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDivIcon = function (angle, isMoving) { return ("\n    <div \n      style=\"transform: rotate(" + (angle || 0) + "deg)\"\n      class=\"mrkr " + (isMoving ? 'marker-mving ' : '') + "\"\n    >\n        <div class=\"" + (isMoving ? 'mving ' : 'not_mving') + "\"></div>\n    </div>\n  "); };
