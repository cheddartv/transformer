"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _default = function _default(node, next) {
  var data = (0, _common.removeParagraphNode)(node);
  return "<th>".concat(next(data.content), "</th>");
};

exports["default"] = _default;