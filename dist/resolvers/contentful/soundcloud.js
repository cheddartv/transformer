"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "\n  <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.soundcloud["class"], "\">\n    <iframe\n      width=\"100%\"\n      height=\"180\"\n      scrolling=\"no\"\n      frameborder=\"no\"\n      allow=\"autoplay\"\n      src=\"https://w.soundcloud.com/player/?url=").concat(node === null || node === void 0 ? void 0 : node.content, "\">\n    </iframe>\n  </div>");
};

exports["default"] = _default;