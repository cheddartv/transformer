"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  return "<amp-video\n    width=\"".concat(node.data.target.fields.width, "\"\n    height=\"").concat(node.data.target.fields.height, "\"\n    src=\"").concat(node.data.target.fields.videoUrls['application/x-mpegURL'], "\"\n    poster=\"").concat(node.data.target.fields.videoUrls['image/jpeg'], "\"\n    layout=\"responsive\"\n    controls>\n    <div fallback>\n      <p>Your browser doesn't support HTML5 video.</p>\n    </div>\n    <source type=\"video/mp4\" src=\"").concat(node.data.target.fields.videoUrls['video/mp4'], "\">\n  </amp-video>");
};

exports["default"] = _default;