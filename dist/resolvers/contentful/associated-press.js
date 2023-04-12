"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i) || 'https://interactives.ap.org/ap-polling-presidential-approval';
  var height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) || 400;

  if (src) {
    return "\n      <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed['associated-press']["class"], "\">\n        <iframe\n          src=\"").concat(src, "\"\n          scrolling=\"no\"\n          width=\"100%\"\n          style=\"border:1px solid #eee\"\n          height=\"").concat(height, "\">\n        </iframe>\n      </div>");
  } else {
    return '';
  }
};

exports["default"] = _default;