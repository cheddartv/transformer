"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "<amp-iframe\n          layout=\"responsive\"\n          width=\"100\"\n          height=\"100\"\n          class=\"".concat(config.embed.carousel["class"], "\"\n          src=\"").concat(data.embed, "\"\n          sandbox=\"allow-scripts allow-same-origin\">\n            <amp-img placeholder\n              src=\"/loading-animation.gif\"\n              height=\"64\"\n              width=\"64\"\n              layout=\"fixed\"></amp-img>\n        </amp-iframe>\n        <em>").concat(data.caption, "</em>");
};

exports["default"] = _default;