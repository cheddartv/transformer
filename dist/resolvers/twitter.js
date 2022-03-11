"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<blockquote class=\"".concat(config.tweet["class"], "\">\n <a href=\"").concat(data.url, "\"></a>\n</blockquote>\n");
};

exports["default"] = _default;