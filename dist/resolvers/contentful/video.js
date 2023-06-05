"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data$target$fie2, _node$data$target$fie3, _node$data$target$fie4, _node$data2, _node$data2$target, _node$data2$target$fi, _node$data3, _node$data3$target, _node$data3$target$fi, _node$data3$target$fi2;

  return "<div\n    class=\"".concat(_config["default"].video["class"], "\"\n    data-poster=\"https:").concat(node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : (_node$data$target$fie2 = _node$data$target$fie.thumbnail) === null || _node$data$target$fie2 === void 0 ? void 0 : (_node$data$target$fie3 = _node$data$target$fie2.fields) === null || _node$data$target$fie3 === void 0 ? void 0 : (_node$data$target$fie4 = _node$data$target$fie3.file) === null || _node$data$target$fie4 === void 0 ? void 0 : _node$data$target$fie4.url, "?fit=fill&w=1920&h=1080&q=85\"\n    data-isLive=\"").concat(node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$fi = _node$data2$target.fields) === null || _node$data2$target$fi === void 0 ? void 0 : _node$data2$target$fi.isLive, "\"\n    data-src=\"").concat(node === null || node === void 0 ? void 0 : (_node$data3 = node.data) === null || _node$data3 === void 0 ? void 0 : (_node$data3$target = _node$data3.target) === null || _node$data3$target === void 0 ? void 0 : (_node$data3$target$fi = _node$data3$target.fields) === null || _node$data3$target$fi === void 0 ? void 0 : (_node$data3$target$fi2 = _node$data3$target$fi.videoUrls) === null || _node$data3$target$fi2 === void 0 ? void 0 : _node$data3$target$fi2['application/x-mpegURL'], "\"></div>");
};

exports["default"] = _default;