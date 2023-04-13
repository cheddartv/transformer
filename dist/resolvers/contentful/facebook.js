"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.facebook["class"], "\">\n    <div class=\"fb-post\" data-allowfullscreen=\"true\" data-width=\"500\" data-href=\"").concat(encodeURI(node === null || node === void 0 ? void 0 : node.content), "\"></div>\n  </div>");
};

exports["default"] = _default;