"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var resolveImageDomain = function resolveImageDomain(url) {
  return url === null || url === void 0 ? void 0 : url.replace('images.ctfassets.net', 'images-cf.news12static.com');
};

var _default = resolveImageDomain;
exports["default"] = _default;