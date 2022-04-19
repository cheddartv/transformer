"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resolvers = require("../resolvers");

var _blockTypes = _interopRequireDefault(require("../block-types.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blockMap = new Map();
blockMap.set(_blockTypes["default"].PARAGRAPH, _resolvers.paragraphResolver);
blockMap.set(_blockTypes["default"].HEADER, _resolvers.headerResolver);
blockMap.set(_blockTypes["default"].LIST, _resolvers.listResolver);
blockMap.set(_blockTypes["default"].IMAGE, _resolvers.imageResolver);
blockMap.set(_blockTypes["default"].EMBED, _resolvers.embedResolver);
blockMap.set(_blockTypes["default"].TWITTER, _resolvers.twitterResolver);
blockMap.set(_blockTypes["default"].QUOTE, _resolvers.quoteResolver);
blockMap.set(_blockTypes["default"].SPOT_IM, _resolvers.spotimResolver);
blockMap.set(_blockTypes["default"].TAGBOARD, _resolvers.tagboardResolver);
blockMap.set(_blockTypes["default"].VIDEO, _resolvers.videoResolver);
var _default = blockMap;
exports["default"] = _default;