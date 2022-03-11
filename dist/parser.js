"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./resolvers/index.js");

var _blockTypes = _interopRequireDefault(require("./block-types.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blockMap = new Map();
blockMap.set(_blockTypes["default"].PARAGRAPH, _index.paragraphResolver);
blockMap.set(_blockTypes["default"].HEADER, _index.headerResolver);
blockMap.set(_blockTypes["default"].LIST, _index.listResolver);
blockMap.set(_blockTypes["default"].IMAGE, _index.imageResolver);
blockMap.set(_blockTypes["default"].EMBED, _index.embedResolver);
blockMap.set(_blockTypes["default"].TWITTER, _index.twitterResolver);
blockMap.set(_blockTypes["default"].QUOTE, _index.quoteResolver);
blockMap.set(_blockTypes["default"].SPOT_IM, _index.spotimResolver);
blockMap.set(_blockTypes["default"].TAGBOARD, _index.tagboardResolver);
blockMap.set(_blockTypes["default"].VIDEO, _index.videoResolver);
var _default = blockMap;
exports["default"] = _default;