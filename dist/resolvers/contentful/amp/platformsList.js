"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data2, _node$data2$target, _node$data2$target$fi, _node$data2$target$fi2;

  return "<div class=\"".concat(_config["default"].embed.platformsList["class"], "\">\n    <p class=\"title\">").concat((node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : _node$data$target$fie.name) || 'Where To Watch', "</p>\n    <div class=\"platforms-container\">\n    ").concat(node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$fi = _node$data2$target.fields) === null || _node$data2$target$fi === void 0 ? void 0 : (_node$data2$target$fi2 = _node$data2$target$fi.platforms) === null || _node$data2$target$fi2 === void 0 ? void 0 : _node$data2$target$fi2.map(function (platform) {
    var _platform$fields, _platform$fields2, _platform$fields3, _platform$fields3$log, _platform$fields3$log2, _platform$fields3$log3, _platform$fields4, _platform$fields4$log, _platform$fields4$log2;

    return "<a class=\"platform-link\" \"".concat(platform === null || platform === void 0 ? void 0 : (_platform$fields = platform.fields) === null || _platform$fields === void 0 ? void 0 : _platform$fields.url, "\">\n                                <div class=\"platform\" style=\"background: ").concat(platform === null || platform === void 0 ? void 0 : (_platform$fields2 = platform.fields) === null || _platform$fields2 === void 0 ? void 0 : _platform$fields2.background, "\">\n                                  <img src=\"https:").concat(platform === null || platform === void 0 ? void 0 : (_platform$fields3 = platform.fields) === null || _platform$fields3 === void 0 ? void 0 : (_platform$fields3$log = _platform$fields3.logo) === null || _platform$fields3$log === void 0 ? void 0 : (_platform$fields3$log2 = _platform$fields3$log.fields) === null || _platform$fields3$log2 === void 0 ? void 0 : (_platform$fields3$log3 = _platform$fields3$log2.file) === null || _platform$fields3$log3 === void 0 ? void 0 : _platform$fields3$log3.url, "\" alt=\"").concat(platform === null || platform === void 0 ? void 0 : (_platform$fields4 = platform.fields) === null || _platform$fields4 === void 0 ? void 0 : (_platform$fields4$log = _platform$fields4.logo) === null || _platform$fields4$log === void 0 ? void 0 : (_platform$fields4$log2 = _platform$fields4$log.fields) === null || _platform$fields4$log2 === void 0 ? void 0 : _platform$fields4$log2.title, "\">\n                                </div>\n                              </a>");
  }).join(''), "</div></div>");
};

exports["default"] = _default;