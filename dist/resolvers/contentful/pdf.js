"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].asset["class"], "\">\n    <iframe\n      src=\"https://docs.google.com/viewerng/viewer?url=https:").concat(node.data.target.fields.file.url, "&embedded=true\"\n      height=\"820\"\n      style=\"width:100%;\"\n      seamless\n      sandbox=\"allow-scripts allow-same-origin\"\n      frameborder=\"0\">\n    </iframe>\n  </div>");
};

exports["default"] = _default;
