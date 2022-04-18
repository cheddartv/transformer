"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<amp-iframe\n            layout=\"responsive\"\n            width=\"".concat(data.width, "\"\n            height=\"").concat(data.height, "\"\n            src=\"").concat(data.embed, "\"\n            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>\n          <em>").concat(data.caption, "</em>");
};

exports["default"] = _default;