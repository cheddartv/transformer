"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], "\">\n    <embed class=\"").concat(_config["default"].embed.form["class"], "\" src=\"https://ugc.curds.io/formviewer/display/").concat(node.content, "\">\n  </div>");
};

exports["default"] = _default;