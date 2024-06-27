"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resolveImageDomain = _interopRequireDefault(require("../../resolveImageDomain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data$target$fie2;

  return "<amp-google-document-embed\n    src=\"https:".concat((0, _resolveImageDomain["default"])(node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : (_node$data$target$fie2 = _node$data$target$fie.file) === null || _node$data$target$fie2 === void 0 ? void 0 : _node$data$target$fie2.url), "\"\n    width=\"300\"\n    height=\"500\"\n    layout=\"responsive\">\n  </amp-google-document-embed>");
};

exports["default"] = _default;