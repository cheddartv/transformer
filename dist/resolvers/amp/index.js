"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "embedResolver", {
  enumerable: true,
  get: function get() {
    return _embed["default"];
  }
});
Object.defineProperty(exports, "imageResolver", {
  enumerable: true,
  get: function get() {
    return _image["default"];
  }
});
Object.defineProperty(exports, "spotimResolver", {
  enumerable: true,
  get: function get() {
    return _spotim["default"];
  }
});
Object.defineProperty(exports, "tagboardResolver", {
  enumerable: true,
  get: function get() {
    return _tagboard["default"];
  }
});
Object.defineProperty(exports, "twitterResolver", {
  enumerable: true,
  get: function get() {
    return _twitter["default"];
  }
});

var _image = _interopRequireDefault(require("./image.js"));

var _twitter = _interopRequireDefault(require("./twitter.js"));

var _spotim = _interopRequireDefault(require("./spotim.js"));

var _tagboard = _interopRequireDefault(require("./tagboard.js"));

var _embed = _interopRequireDefault(require("./embed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }