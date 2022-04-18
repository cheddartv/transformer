"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resolvers = require("../resolvers");

var _amp = require("../resolvers/amp");

var _blockTypes = _interopRequireDefault(require("../block-types.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ampBlockMap = new Map();
ampBlockMap.set(_blockTypes["default"].PARAGRAPH, _resolvers.paragraphResolver);
ampBlockMap.set(_blockTypes["default"].HEADER, _resolvers.headerResolver);
ampBlockMap.set(_blockTypes["default"].LIST, _resolvers.listResolver);
ampBlockMap.set(_blockTypes["default"].IMAGE, _amp.imageResolver);
ampBlockMap.set(_blockTypes["default"].EMBED, _amp.embedResolver);
ampBlockMap.set(_blockTypes["default"].TWITTER, _amp.twitterResolver);
ampBlockMap.set(_blockTypes["default"].QUOTE, _resolvers.quoteResolver);
ampBlockMap.set(_blockTypes["default"].SPOT_IM, _amp.spotimResolver);
ampBlockMap.set(_blockTypes["default"].TAGBOARD, _amp.tagboardResolver);
ampBlockMap.set(_blockTypes["default"].VIDEO, _resolvers.videoResolver);
var _default = ampBlockMap;
exports["default"] = _default;