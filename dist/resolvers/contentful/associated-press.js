"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(node) {
  return z(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <div class=\"", " ", "\">\n    ", "\n  </div>"])), _config["default"].embed["class"], _config["default"].embed['associated-press']["class"], node.content);
};

exports["default"] = _default;