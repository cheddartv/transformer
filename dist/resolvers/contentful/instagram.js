"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractInstagramPath = exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var extractInstagramPath = function extractInstagramPath(url) {
  var pattern = /^https?:\/\/(?:www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9-_]+)/;
  var match = url.match(pattern);

  if (match) {
    var path = match[1];
    var id = match[2];
    return "".concat(path, "/").concat(id);
  } else {
    return false;
  }
};

exports.extractInstagramPath = extractInstagramPath;

var _default = function _default(node) {
  if (extractInstagramPath(node === null || node === void 0 ? void 0 : node.content)) {
    return "\n      <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.instagram["class"], "\">\n        <iframe width=\"100%\" height=\"400\" src=\"https://www.instagram.com/").concat(extractInstagramPath(node === null || node === void 0 ? void 0 : node.content), "/embed\" frameborder=\"0\"></iframe>\n      </div>");
  } else {
    return '';
  }
};

exports["default"] = _default;