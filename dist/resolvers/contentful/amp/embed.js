"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _default = function _default(node, next) {
  var _node$data, _node$data$target, _node$data$target$sys, _node$data$target$sys2, _node$data$target$sys3;

  var type = node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$sys = _node$data$target.sys) === null || _node$data$target$sys === void 0 ? void 0 : (_node$data$target$sys2 = _node$data$target$sys.contentType) === null || _node$data$target$sys2 === void 0 ? void 0 : (_node$data$target$sys3 = _node$data$target$sys2.sys) === null || _node$data$target$sys3 === void 0 ? void 0 : _node$data$target$sys3.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    default:
      return '';
  }
};

exports["default"] = _default;