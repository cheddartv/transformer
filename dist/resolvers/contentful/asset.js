"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _default = function _default(node, next) {
  var type = node.data.target.fields.file.contentType;

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