"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  var match = node === null || node === void 0 ? void 0 : node.content.match(/status\/(\d+)/);

  if (match[1]) {
    return "<amp-twitter width=\"375\" height=\"472\" layout=\"responsive\" data-tweetid=\"".concat(match[1], "\"></amp-twitter>");
  } else {
    return '';
  }
};

exports["default"] = _default;