"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  return "<amp-iframe\n  layout=\"responsive\"\n  width=\"100\"\n  height=\"100\"\n  class=\"".concat(_config["default"].embed.form["class"], "\"\n  src=\"https://ugc.alticeustech.com/formviewer/display/").concat(node === null || node === void 0 ? void 0 : node.content, "\"\n  sandbox=\"allow-scripts allow-same-origin\">\n    <amp-img placeholder\n      src=\"/loading-animation.gif\"\n      height=\"64\"\n      width=\"64\"\n      layout=\"fixed\">\n    </amp-img>\n  </amp-iframe>");
};

exports["default"] = _default;