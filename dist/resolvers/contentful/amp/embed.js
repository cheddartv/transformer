"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _instagram = _interopRequireDefault(require("./instagram"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$data, _node$data$target, _node$data$target$sys, _node$data$target$sys2, _node$data$target$sys3, _node$data2, _node$data2$target, _node$data2$target$fi;

  var type = node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$sys = _node$data$target.sys) === null || _node$data$target$sys === void 0 ? void 0 : (_node$data$target$sys2 = _node$data$target$sys.contentType) === null || _node$data$target$sys2 === void 0 ? void 0 : (_node$data$target$sys3 = _node$data$target$sys2.sys) === null || _node$data$target$sys3 === void 0 ? void 0 : _node$data$target$sys3.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    case 'embed':
      if (node !== null && node !== void 0 && (_node$data2 = node.data) !== null && _node$data2 !== void 0 && (_node$data2$target = _node$data2.target) !== null && _node$data2$target !== void 0 && (_node$data2$target$fi = _node$data2$target.fields) !== null && _node$data2$target$fi !== void 0 && _node$data2$target$fi.code.startsWith('<blockquote class="instagram-media"')) {
        return (0, _instagram["default"])(node);
      }

      break;

    default:
      return '';
  }
};

exports["default"] = _default;