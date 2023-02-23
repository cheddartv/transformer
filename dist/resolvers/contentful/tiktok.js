"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  if ((0, _common.extractTikTokVideoId)(node.content)) {
    return "\n      <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.tiktok["class"], "\">\n        <iframe src=\"https://www.tiktok.com/embed/").concat((0, _common.extractTikTokVideoId)(node.content), "\" allowfullscreenscrolling=\"no\" allow=\"encrypted-media;\" style=\"border:none;width:100%;\" height=\"740\"></iframe>\n      </div>");
  } else {
    return '';
  }
};

exports["default"] = _default;