"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.youtube["class"], "\">\n    <iframe\n      height=\"400\"\n      src=\"https://www.youtube.com/embed/").concat((0, _common.extractYoutubeVideoId)(node.content), "\"\n      style=\"width:100%;\"\n      title=\"YouTube video player\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n  </div>");
};

exports["default"] = _default;