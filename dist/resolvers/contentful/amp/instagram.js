"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data$target$fie2;

  var match = node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : (_node$data$target$fie2 = _node$data$target$fie.code) === null || _node$data$target$fie2 === void 0 ? void 0 : _node$data$target$fie2.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)(?:\/|\?|$)/);

  if (match[1]) {
    return "<amp-instagram data-shortcode=\"".concat(match[1], "\" width=\"350\" height=\"300\" layout=\"responsive\"></amp-instagram>");
  } else {
    return '';
  }
};

exports["default"] = _default;