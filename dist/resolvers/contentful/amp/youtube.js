"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _default = function _default(node) {
  return "<amp-youtube\n    data-videoid=\"".concat((0, _common.extractYoutubeVideoId)(node.content), "\"\n    layout=\"responsive\"\n    width=\"").concat(node.attributes.width, "\"\n    height=\"").concat(node.attributes.height, "\">\n  </amp-youtube>");
};

exports["default"] = _default;