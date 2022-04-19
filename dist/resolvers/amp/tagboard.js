"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<amp-iframe layout=\"responsive\"\n            width=\"100\"\n            height=\"100\"\n            src=\"https://longisland.news12.curds.io/poll?id=".concat(data.id, "\"\n            sandbox=\"allow-scripts allow-same-origin\">\n           <amp-img placeholder\n              src=\"/loading-animation.gif\"\n              height=\"64\"\n              width=\"64\"\n              layout=\"fixed\"></amp-img>\n        </amp-iframe>");
};

exports["default"] = _default;