"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<amp-img width=\"600\" height=\"338\" layout=\"responsive\" src=\"".concat(data.file.url, "\" alt=\"\"></amp-img>\n          <em>").concat(data.caption, "</em>");
};

exports["default"] = _default;