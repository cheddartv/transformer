"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data$target$fie2;

  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].pdf["class"], "\" data-url=\"https:").concat(encodeURIComponent(node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : (_node$data$target$fie2 = _node$data$target$fie.file) === null || _node$data$target$fie2 === void 0 ? void 0 : _node$data$target$fie2.url), "\"></div>");
};

exports["default"] = _default;