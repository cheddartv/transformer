"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  var match = node.content.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)(?:\/|\?|$)/);

  if (match[1]) {
    return "<amp-instagram data-shortcode=\"".concat(match[1], "\" width=\"350\" height=\"300\" layout=\"responsive\"></amp-instagram>");
  } else {
    return '';
  }
};

exports["default"] = _default;