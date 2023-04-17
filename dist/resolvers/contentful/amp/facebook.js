"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _facebook = require("../facebook");

var _default = function _default(node) {
  var _urlType = (0, _facebook.urlType)(node === null || node === void 0 ? void 0 : node.content),
      type = _urlType.type,
      url = _urlType.url;

  if (type === 'unknown') {
    return '';
  } else {
    return "\n      <amp-facebook\n        width=\"300\"\n        height=\"400\"\n        layout=\"responsive\"\n        data-embed-as=\"".concat(type, "\"\n        data-href=\"").concat(url, "\">\n      </amp-facebook>");
  }
};

exports["default"] = _default;