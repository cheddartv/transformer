"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div\n    class=\"".concat(_config["default"].asset["class"], "\"\n    data-type=\"").concat(node.data.target.fields.file.contentType, "\"\n    data-src=\"https:").concat(node.data.target.fields.file.url, "\">\n  </div>");
};

exports["default"] = _default;