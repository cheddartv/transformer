"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = require("./parser");

var _index = require("../../resolvers/contentful/amp/index");

var _richTextHtmlRenderer = require("@contentful/rich-text-html-renderer");

var _richTextTypes = require("@contentful/rich-text-types");

var _objectSpread2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  renderNode: _objectSpread(_objectSpread({}, _parser.options.renderNode), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _richTextTypes.BLOCKS.EMBEDDED_ASSET, _index.asset), _defineProperty(_objectSpread2, _richTextTypes.BLOCKS.EMBEDDED_ENTRY, _index.embed), _defineProperty(_objectSpread2, _richTextTypes.BLOCKS.PARAGRAPH, _index.paragraph), _defineProperty(_objectSpread2, _richTextTypes.BLOCKS.TABLE, function (node, next) {
    return '';
  }), _objectSpread2))
};

function parser(data) {
  return (0, _richTextHtmlRenderer.documentToHtmlString)(data, options);
}

var _default = parser;
exports["default"] = _default;