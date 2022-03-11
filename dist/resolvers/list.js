"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(data, config) {
  var type = data.style === 'ordered' ? 'ol' : 'ul';
  var items = data.items.reduce(function (acc, item) {
    return acc + "<li>".concat(item, "</li>");
  }, '');
  return "<div class=\"list\"><".concat(type, ">").concat(items, "</").concat(type, "></div>");
};

exports["default"] = _default;