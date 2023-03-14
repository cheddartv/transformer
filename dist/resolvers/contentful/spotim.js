"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$attributes;

  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.spotim["class"], "\">\n    <script\n      src=\"https://launcher.spot.im/spot/").concat((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.organization, "\"\n      data-spotim-module=\"spotim-launcher\"\n      data-live-blog=\"true\"\n      data-live-event-code=\"").concat(node.content, "\"\n      data-enable-live-blog-replies=\"false\"></script>\n  </div>");
};

exports["default"] = _default;