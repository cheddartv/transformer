"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.options = exports["default"] = void 0;

var _contentful = require("../../resolvers/contentful");

var _asset = require("../../resolvers/contentful/asset");

var _richTextHtmlRenderer = require("@contentful/rich-text-html-renderer");

var _richTextTypes = require("@contentful/rich-text-types");

var _renderNode;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  renderNode: (_renderNode = {}, _defineProperty(_renderNode, _richTextTypes.BLOCKS.EMBEDDED_ASSET, _asset.asset), _defineProperty(_renderNode, _richTextTypes.BLOCKS.EMBEDDED_ENTRY, _contentful.embed), _defineProperty(_renderNode, _richTextTypes.BLOCKS.LIST_ITEM, _contentful.listItem), _defineProperty(_renderNode, _richTextTypes.BLOCKS.OL_LIST, _contentful.list), _defineProperty(_renderNode, _richTextTypes.BLOCKS.PARAGRAPH, _contentful.paragraph), _defineProperty(_renderNode, _richTextTypes.BLOCKS.QUOTE, _contentful.quote), _defineProperty(_renderNode, _richTextTypes.BLOCKS.TABLE_CELL, _contentful.tableCell), _defineProperty(_renderNode, _richTextTypes.BLOCKS.TABLE_HEADER_CELL, _contentful.tableHeaderCell), _defineProperty(_renderNode, _richTextTypes.BLOCKS.UL_LIST, _contentful.list), _renderNode)
};
exports.options = options;

function parser(data) {
  return (0, _richTextHtmlRenderer.documentToHtmlString)(data, options);
}

var _default = parser;
exports["default"] = _default;