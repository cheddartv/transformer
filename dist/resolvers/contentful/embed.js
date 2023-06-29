"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _config = _interopRequireDefault(require("../../config"));

var _encodeHTML = _interopRequireDefault(require("../../util/encodeHTML"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fixInstagramScriptSrc = function fixInstagramScriptSrc(html) {
  return html.replace('<script async src="//www.instagram.com/embed.js"></script>', '<script async src="https://www.instagram.com/embed.js"></script>');
};

var embed = function embed(node) {
  var _node$data, _node$data$target, _node$data$target$fie;

  if (node !== null && node !== void 0 && (_node$data = node.data) !== null && _node$data !== void 0 && (_node$data$target = _node$data.target) !== null && _node$data$target !== void 0 && (_node$data$target$fie = _node$data$target.fields) !== null && _node$data$target$fie !== void 0 && _node$data$target$fie.code.startsWith('<blockquote class="instagram-media"')) {
    var _node$data2, _node$data2$target, _node$data2$target$fi;

    return "<div class='".concat(_config["default"].embed.instagram["class"], "' \n                 data-embed='").concat((0, _encodeHTML["default"])(fixInstagramScriptSrc(node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$fi = _node$data2$target.fields) === null || _node$data2$target$fi === void 0 ? void 0 : _node$data2$target$fi.code)), "'></div>");
  } else {
    var _node$data3, _node$data3$target, _node$data3$target$fi;

    return "<div class='".concat(_config["default"].embed["class"], "'><div>").concat(node === null || node === void 0 ? void 0 : (_node$data3 = node.data) === null || _node$data3 === void 0 ? void 0 : (_node$data3$target = _node$data3.target) === null || _node$data3$target === void 0 ? void 0 : (_node$data3$target$fi = _node$data3$target.fields) === null || _node$data3$target$fi === void 0 ? void 0 : _node$data3$target$fi.code, "</div></div>");
  }
};

var _default = function _default(node) {
  var _node$data4, _node$data4$target, _node$data4$target$sy, _node$data4$target$sy2, _node$data4$target$sy3;

  var type = node === null || node === void 0 ? void 0 : (_node$data4 = node.data) === null || _node$data4 === void 0 ? void 0 : (_node$data4$target = _node$data4.target) === null || _node$data4$target === void 0 ? void 0 : (_node$data4$target$sy = _node$data4$target.sys) === null || _node$data4$target$sy === void 0 ? void 0 : (_node$data4$target$sy2 = _node$data4$target$sy.contentType) === null || _node$data4$target$sy2 === void 0 ? void 0 : (_node$data4$target$sy3 = _node$data4$target$sy2.sys) === null || _node$data4$target$sy3 === void 0 ? void 0 : _node$data4$target$sy3.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    case 'embed':
      return embed(node);

    default:
      return '';
  }
};

exports["default"] = _default;