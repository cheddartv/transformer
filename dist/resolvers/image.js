"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resolveImageDomain = _interopRequireDefault(require("./resolveImageDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(data, config) {
  return "<div>\n <img src=\"".concat((0, _resolveImageDomain["default"])(data.file.url), "\" alt=\"\"/>\n <em>").concat(data.caption, "</em>\n</div>\n");
};

exports["default"] = _default;