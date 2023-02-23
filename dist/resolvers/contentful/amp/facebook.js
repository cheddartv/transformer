"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function type(url) {
  var regex = /facebook.com\/[a-zA-Z0-9_]+\/(posts|videos)\//;
  var match = url.match(regex);

  if (match) {
    return match[1] === 'posts' ? 'post' : 'video';
  }

  return 'post';
}

var _default = function _default(node) {
  return "<amp-facebook\n    width=\"300\"\n    height=\"400\"\n    layout=\"responsive\"\n    data-embed-as=\"".concat(type(node.content), "\"\n    data-href=\"").concat(node.content, "\">\n  </amp-facebook>");
};

exports["default"] = _default;