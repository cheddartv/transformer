"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.facebook["class"], "\">\n    <div id=\"fb-root\"></div>\n    <script async defer src=\"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2\"></script>\n    <div class=\"fb-video\" data-allowfullscreen=\"true\" data-width=\"500\" data-href=\"").concat(encodeURI(node === null || node === void 0 ? void 0 : node.content), "\"></div>\n  </div>");
};

exports["default"] = _default;