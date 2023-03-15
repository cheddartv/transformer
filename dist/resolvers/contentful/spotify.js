"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = require("./common");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  if ((0, _common.extractSpotifyId)(node.content)) {
    return "\n    <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.spotify["class"], "\">\n      <iframe\n        width=\"100%\"\n        height=\"200\"\n        scrolling=\"no\"\n        frameBorder=\"0\"\n        allowfullscreen=\"\"\n        allow=\"autoplay\"\n        allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"\n        loading=\"lazy\"\n        src=\"https://open.spotify.com/embed").concat((0, _common.extractSpotifyId)(node === null || node === void 0 ? void 0 : node.content), "\">\n      </iframe>\n    </div>");
  } else {
    return '';
  }
};

exports["default"] = _default;