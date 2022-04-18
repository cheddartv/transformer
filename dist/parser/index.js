"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ampParser", {
  enumerable: true,
  get: function get() {
    return _ampParser["default"];
  }
});
Object.defineProperty(exports, "standardParser", {
  enumerable: true,
  get: function get() {
    return _parser["default"];
  }
});

var _parser = _interopRequireDefault(require("./parser"));

var _ampParser = _interopRequireDefault(require("./ampParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }