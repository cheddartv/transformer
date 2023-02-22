"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _default = function _default(node, next) {
  var type = node.data.target.sys.contentType.sys.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    default:
      return '';
  }
};

exports["default"] = _default;