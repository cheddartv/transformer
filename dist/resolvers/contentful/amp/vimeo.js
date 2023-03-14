"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("../common");

var _default = function _default(node) {
  if ((0, _common.extractVimeoId)(node.content)) {
    return "<amp-vimeo data-videoid=\"".concat((0, _common.extractVimeoId)(node === null || node === void 0 ? void 0 : node.content), "\" layout=\"responsive\" width=\"300\" height=\"200\"></amp-vimeo>");
  } else {
    return '';
  }
};

exports["default"] = _default;