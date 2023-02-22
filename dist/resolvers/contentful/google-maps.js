"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i);

  if (src) {
    var height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) ? node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i)[1] : '450';
    var width = node.content.match(/<iframe.*?\bwidth="(.*?)".*?>/i) ? node.content.match(/<iframe.*?\bwidth="(.*?)".*?>/i)[1] : '600';
    return "\n      <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed['google-maps']["class"], "\">\n        <iframe\n          src=\"").concat(src[1], "\"\n          width=\"").concat(width, "\"\n          height=\"").concat(height, "\"\n          style=\"border:0;\"\n          allowfullscreen=\"\"\n          loading=\"lazy\"\n          referrerpolicy=\"no-referrer-when-downgrade\">\n        </iframe>\n      </div>");
  } else {
    return '';
  }
};

exports["default"] = _default;