"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  return "<div>\n    <img src=\"https:".concat(node.data.target.fields.file.url, "\" alt=\"\"/>\n    <em>").concat(node.data.target.fields.description, "</em>\n  </div>");
};

exports["default"] = _default;