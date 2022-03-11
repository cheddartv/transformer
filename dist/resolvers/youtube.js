"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  return "\n    <div class=\"".concat(config.embed["class"], "\" style=\"width: ").concat(data.width, "px;\">\n      <embed class=\"").concat(config.embed["class"], "\" height=\"").concat(data.height, "\" width=\"").concat(data.width, "\" src=\"").concat(data.embed, "\">  \n      <em>").concat(data.caption, "</em>\n    </div>");
};

exports["default"] = _default;