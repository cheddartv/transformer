"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.form["class"], "\">\n    <iframe src=\"https://ugc.curds.io/formviewer/display/").concat(node.content, "\" width=\"100%\" height=\"770\" scrolling=\"no\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>");
};

exports["default"] = _default;