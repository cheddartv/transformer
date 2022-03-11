"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "\n    <script src=\"https://launcher.spot.im/spot/".concat(data.org_id, "\" data-spotim-module=\"spotim-launcher\" data-live-blog=\"true\" \n      data-live-event-code=\"").concat(data.id, "\" data-enable-live-blog-replies=\"false\"></script>");
};

exports["default"] = _default;