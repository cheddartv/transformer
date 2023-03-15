"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _default = function _default(node, next) {
  var data = (0, _common.removeParagraphNode)(node);
  return "<li>".concat(next(data === null || data === void 0 ? void 0 : data.content), "</li>");
};

exports["default"] = _default;