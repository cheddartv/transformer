"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  return "<amp-img\n    width=\"600\"\n    height=\"338\"\n    layout=\"responsive\"\n    src=\"https:".concat(node.data.target.fields.file.url, "\"\n    alt=\"\"></amp-img>\n  <em>").concat(node.data.target.fields.description, "</em>");
};

exports["default"] = _default;