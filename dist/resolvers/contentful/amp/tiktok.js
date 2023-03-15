"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _default = function _default(node) {
  if ((0, _common.extractTikTokVideoId)(node === null || node === void 0 ? void 0 : node.content)) {
    return "<amp-tiktok width=\"325\" height=\"575\" data-src=\"".concat((0, _common.extractTikTokVideoId)(node === null || node === void 0 ? void 0 : node.content), "\"></amp-tiktok>");
  } else {
    return '';
  }
};

exports["default"] = _default;