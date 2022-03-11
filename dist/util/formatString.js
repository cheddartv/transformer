"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prettier = require("prettier");

var _default = function _default(str) {
  return (0, _prettier.format)(str, {
    parser: 'html'
  });
};

exports["default"] = _default;