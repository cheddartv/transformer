"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeHtml = decodeHtml;
exports["default"] = void 0;

var _he = require("he");

function decodeHtml(htmlString) {
  return (0, _he.decode)(htmlString);
}

var _default = decodeHtml;
exports["default"] = _default;