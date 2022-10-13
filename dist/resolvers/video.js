"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<div class=\"".concat(config.video["class"], "\" data-caption=\"").concat(data.caption, "\" data-isLive=\"").concat(data.isLive, "\" data-src=\"").concat(data.url, "\"></div>");
};

exports["default"] = _default;