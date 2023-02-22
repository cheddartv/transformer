"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

var _shortcode = _interopRequireDefault(require("./shortcode.js"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, next) {
  if ((0, _common.isShortCode)(node)) {
    return (0, _shortcode["default"])(node);
  } else {
    return "<div class=\"".concat(_config["default"].paragraph["class"], "\">").concat(next(node.content), "</div>");
  }
};

exports["default"] = _default;