"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<blockquote class=\"".concat(config.quote["class"], "\">\n  <p>").concat(data.text, "</p>\n  <footer>").concat(data.caption, "</footer>\n</blockquote>\n");
};

exports["default"] = _default;