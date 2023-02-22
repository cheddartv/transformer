"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  return "<amp-google-document-embed\n    src=\"https:".concat(node.data.target.fields.file.url, "\"\n    width=\"300\"\n    height=\"500\"\n    layout=\"responsive\">\n  </amp-google-document-embed>");
};

exports["default"] = _default;