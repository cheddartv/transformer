"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var embed = function embed(node) {
  var _node$data, _node$data$target, _node$data$target$fie;

  return "<div class=\"".concat(_config["default"].embed["class"], "\"><div>").concat(node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : _node$data$target$fie.code, "</div></div>");
};

var _default = function _default(node, next) {
  var _node$data2, _node$data2$target, _node$data2$target$sy, _node$data2$target$sy2, _node$data2$target$sy3;

  var type = node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$sy = _node$data2$target.sys) === null || _node$data2$target$sy === void 0 ? void 0 : (_node$data2$target$sy2 = _node$data2$target$sy.contentType) === null || _node$data2$target$sy2 === void 0 ? void 0 : (_node$data2$target$sy3 = _node$data2$target$sy2.sys) === null || _node$data2$target$sy3 === void 0 ? void 0 : _node$data2$target$sy3.id;

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