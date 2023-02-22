"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "\n  <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.tagboard["class"], "\">\n    <div class=\"").concat(_config["default"].embed.tagboard["class"], "\" tgb-embed-id=\"").concat(node.content, "\"></div>\n  </div>");
};

exports["default"] = _default;