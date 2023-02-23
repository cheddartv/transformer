"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, next) {
  var type = node.nodeType === 'ordered-list' ? 'ol' : 'ul';
  return "<div class=\"".concat(_config["default"].list["class"], "\"><").concat(type, ">").concat(next(node.content), "</").concat(type, "></div>");
};

exports["default"] = _default;