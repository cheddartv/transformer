"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeParagraphNode = exports.isShortCode = exports.extractYoutubeVideoId = exports.extractVimeoId = exports.extractTikTokVideoId = exports.extractSpotifyId = exports.extractInstagramId = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var removeParagraphNode = function removeParagraphNode(node) {
  var _node$content, _node$content$;

  return _objectSpread(_objectSpread({}, node), {}, {
    content: _toConsumableArray(node === null || node === void 0 ? void 0 : (_node$content = node.content) === null || _node$content === void 0 ? void 0 : (_node$content$ = _node$content[0]) === null || _node$content$ === void 0 ? void 0 : _node$content$.content)
  });
};

exports.removeParagraphNode = removeParagraphNode;

var isShortCode = function isShortCode(node) {
  var _node$content2, _node$content2$, _node$content3, _node$content3$, _node$content3$$value, _node$content4, _node$content4$, _node$content4$$value;

  if ((node === null || node === void 0 ? void 0 : (_node$content2 = node.content) === null || _node$content2 === void 0 ? void 0 : (_node$content2$ = _node$content2[0]) === null || _node$content2$ === void 0 ? void 0 : _node$content2$.nodeType) === 'text' && node !== null && node !== void 0 && (_node$content3 = node.content) !== null && _node$content3 !== void 0 && (_node$content3$ = _node$content3[0]) !== null && _node$content3$ !== void 0 && (_node$content3$$value = _node$content3$.value) !== null && _node$content3$$value !== void 0 && _node$content3$$value.trim().startsWith('[') && node !== null && node !== void 0 && (_node$content4 = node.content) !== null && _node$content4 !== void 0 && (_node$content4$ = _node$content4[0]) !== null && _node$content4$ !== void 0 && (_node$content4$$value = _node$content4$.value) !== null && _node$content4$$value !== void 0 && _node$content4$$value.trim().endsWith(']')) {
    return true;
  } else {
    return false;
  }
};

exports.isShortCode = isShortCode;

var extractYoutubeVideoId = function extractYoutubeVideoId(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};

exports.extractYoutubeVideoId = extractYoutubeVideoId;

var extractTikTokVideoId = function extractTikTokVideoId(url) {
  var regExp = /\/video\/(\d+)/;
  var match = url.match(regExp);
  return match && match[1].length ? match[1] : false;
};

exports.extractTikTokVideoId = extractTikTokVideoId;

var extractVimeoId = function extractVimeoId(url) {
  var regex = /(?:\/)(\d+)(?:$|\/|\?)/;
  var match = url.match(regex);
  return match ? match[1] : false;
};

exports.extractVimeoId = extractVimeoId;

var extractSpotifyId = function extractSpotifyId(url) {
  var regex = /(\/(track|playlist)\/[a-zA-Z0-9]+)+/;
  var match = url.match(regex);
  return match ? match[0] : false;
};

exports.extractSpotifyId = extractSpotifyId;

var extractInstagramId = function extractInstagramId(url) {
  var regex = /https:\/\/www\.instagram\.com\/p\/([a-zA-Z0-9_-]+)\//;
  var match = url.match(regex);
  return match ? match[1] : false;
};

exports.extractInstagramId = extractInstagramId;