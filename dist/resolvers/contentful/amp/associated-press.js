"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  return "\n  <amp-iframe\n    layout=\"responsive\"\n    width=\"300\"\n    height=\"100\"\n    sandbox=\"allow-scripts allow-same-origin\"\n    src=\"".concat(node.content, "\">\n    <amp-img placeholder\n      src=\"/loading-animation.gif\"\n      height=\"64\"\n      width=\"64\"\n      layout=\"fixed\">\n    </amp-img>\n  </amp-iframe>");
};

exports["default"] = _default;