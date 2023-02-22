"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.facebook["class"], "\">\n    <iframe\n      src=\"https://www.facebook.com/plugins/post.php?href=").concat(node.content, "\"\n      width=\"").concat(node.attributes.width || 500, "\"\n      height=\"").concat(node.attributes.height || 400, "\"\n      style=\"border:none;overflow:hidden\"\n      scrolling=\"no\"\n      frameborder=\"0\"\n      allowfullscreen=\"true\"\n      allow=\"autoplay;\n      clipboard-write;\n      encrypted-media;\n      picture-in-picture;\n      web-share\"></iframe>\n  </div>");
};

exports["default"] = _default;