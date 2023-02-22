"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.vimeo["class"], "\">\n    <iframe\n      width=\"").concat(node.attributes.width || 500, "\"\n      height=\"").concat(node.attributes.height || 400, "\"\n      src=\"https://player.vimeo.com/video/").concat((0, _common.extractVimeoId)(node.content), "\"\n      title=\"Vimeo video player\"\n      frameborder=\"0\"\n      allow=\"autoplay; fullscreen; picture-in-picture\">\n    </iframe>\n  </div>");
};

exports["default"] = _default;