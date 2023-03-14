"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "\n  <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed['associated-press']["class"], "\">\n    <iframe\n      src=\"").concat(node === null || node === void 0 ? void 0 : node.content, "\"\n      scrolling=\"no\"\n      width=\"100%\"\n      style=\"border:none\"\n      height=\"400\">\n    </iframe>\n  </div>");
};

exports["default"] = _default;