"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _default = function _default(node) {
  return "<amp-youtube\n    data-videoid=\"".concat((0, _common.extractYoutubeVideoId)(node === null || node === void 0 ? void 0 : node.content), "\"\n    layout=\"responsive\"\n    width=\"300\"\n    height=\"200\">\n  </amp-youtube>");
};

exports["default"] = _default;