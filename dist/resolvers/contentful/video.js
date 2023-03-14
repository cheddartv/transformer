"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div\n    class=\"".concat(_config["default"].video["class"], "\"\n    data-poster=\"https:").concat(node.data.target.fields.thumbnail.fields.file.url, "\"\n    data-isLive=\"").concat(node.data.target.fields.isLive, "\"\n    data-src=\"").concat(node.data.target.fields.videoUrls['application/x-mpegURL'], "\"></div>");
};

exports["default"] = _default;