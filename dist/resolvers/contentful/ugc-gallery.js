"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.carousel["class"], "\">\n    <iframe src=\"https://ugc.prod.alticeustech.com/carousel/").concat(node.content, "\" width=\"100%\" height=\"770\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>");
};

exports["default"] = _default;