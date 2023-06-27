"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var encodeHTML = function encodeHTML(str) {
  return str.replace(/&/g, '&amp').replace(/'/g, '&apos').replace(/"/g, '&quot').replace(/>/g, '&gt').replace(/</g, '&lt');
};

var _default = encodeHTML;
exports["default"] = _default;