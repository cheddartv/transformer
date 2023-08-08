"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div\n    class=\"".concat(_config["default"].asset.video["class"], "\"\n    data-title=\"").concat(node.data.target.fields.file.title, "\"\n    data-type=\"").concat(node.data.target.fields.file.contentType, "\"\n    data-description=\"").concat(node.data.target.fields.description, "\"\n    data-src=\"https://").concat(node.data.target.fields.file.url, "#t=0.001\"></div>");
};

exports["default"] = _default;