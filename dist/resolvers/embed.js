"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _youtube = _interopRequireDefault(require("./youtube.js"));

var _cheddarVideo = _interopRequireDefault(require("./cheddar-video.js"));

var _carousel = _interopRequireDefault(require("./carousel.js"));

var _form = _interopRequireDefault(require("./form.js"));

var _facebook = _interopRequireDefault(require("./facebook.js"));

var _embedTypes = _interopRequireDefault(require("../embed-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var embedRenderMap = new Map();
embedRenderMap.set(_embedTypes["default"].YOUTUBE, _youtube["default"]);
embedRenderMap.set(_embedTypes["default"].CHEDDAR_VIDEO, _cheddarVideo["default"]);
embedRenderMap.set(_embedTypes["default"].UGC_CAROUSEL, _carousel["default"]);
embedRenderMap.set(_embedTypes["default"].UGC_FORM, _form["default"]);
embedRenderMap.set(_embedTypes["default"].FACEBOOK, _facebook["default"]);

var _default = function _default(data, config) {
  var renderer = embedRenderMap.get(data.service);

  if (renderer) {
    return renderer(data, config);
  } else return '';
};

exports["default"] = _default;