"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _default = function _default(node, next) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data$target$fie2;

  var type = node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : (_node$data$target$fie2 = _node$data$target$fie.file) === null || _node$data$target$fie2 === void 0 ? void 0 : _node$data$target$fie2.contentType;

  switch (type) {
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
    case 'image/gif':
      return (0, _.image)(node);

    case 'application/pdf':
      return (0, _.pdf)(node);

    default:
      return '';
  }
};

exports["default"] = _default;