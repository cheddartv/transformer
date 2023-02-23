"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, next) {
  var data = (0, _common.removeParagraphNode)(node);
  return "<blockquote class=\"".concat(_config["default"].quote["class"], "\"><p>").concat(next(data.content), "</p></blockquote>");
};

exports["default"] = _default;