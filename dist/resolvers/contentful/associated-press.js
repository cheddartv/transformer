"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i);
  var height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i);
  return "\n    <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed['associated-press']["class"], "\">\n      <iframe\n            src=\"").concat(src[1], "\"\n            height=\"").concat(height[1], "\"\n            style=\"border:0;width:100%;\"\n          </iframe>\n    </div>");
};

exports["default"] = _default;