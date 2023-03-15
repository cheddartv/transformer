"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _default = function _default(node) {
  if ((0, _common.extractSpotifyId)(node === null || node === void 0 ? void 0 : node.content)) {
    return "\n      <amp-iframe\n        layout=\"responsive\"\n        width=\"300\"\n        height=\"100\"\n        sandbox=\"allow-scripts allow-same-origin\"\n        src=\"https://open.spotify.com/embed".concat((0, _common.extractSpotifyId)(node === null || node === void 0 ? void 0 : node.content), "\">\n        <amp-img placeholder\n          src=\"/loading-animation.gif\"\n          height=\"64\"\n          width=\"64\"\n          layout=\"fixed\">\n        </amp-img>\n      </amp-iframe>");
  } else {
    return '';
  }
};

exports["default"] = _default;