"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(node) {
  var _node$content;

  var src = node === null || node === void 0 ? void 0 : (_node$content = node.content) === null || _node$content === void 0 ? void 0 : _node$content.match(/<iframe.*?\bsrc="(.*?)".*?>/i);

  if (src) {
    return "\n      <amp-iframe\n        width=\"300\"\n        height=\"400\"\n        title=\"Google maps\"\n        layout=\"responsive\"\n        frameborder=\"0\"\n        sandbox=\"allow-scripts allow-same-origin\"\n        src=\"".concat(src[1], "\">\n        <amp-img placeholder\n          src=\"/loading-animation.gif\"\n          height=\"64\"\n          width=\"64\"\n          layout=\"fixed\">\n        </amp-img>\n      </amp-iframe>");
  } else {
    return '';
  }
};

exports["default"] = _default;