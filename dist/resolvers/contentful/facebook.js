"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.facebook["class"], "\">\n    <iframe\n      src=\"https://www.facebook.com/plugins/post.php?href=").concat(encodeURI(node === null || node === void 0 ? void 0 : node.content), "&width=auto\"\n      data-src=\"").concat(encodeURI(node === null || node === void 0 ? void 0 : node.content), "&width=auto\"\n      height=\"500\"\n      style=\"border:none;overflow:visible;width:100%\"\n      scrolling=\"yes\"\n      frameborder=\"0\"\n      allowfullscreen=\"true\"\n      allow=\"autoplay;\n      clipboard-write;\n      encrypted-media;\n      picture-in-picture;\n      web-share\"></iframe>\n  </div>");
};

exports["default"] = _default;