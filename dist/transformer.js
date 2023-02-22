"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsBeautify = require("js-beautify");

var _parser = require("./parser");

var _parser2 = _interopRequireDefault(require("./parser/contentful/parser"));

var _ampParser = _interopRequireDefault(require("./parser/contentful/ampParser"));

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var formatOptions = {
  indent_size: '1',
  indent_char: '\t',
  max_preserve_newlines: '-1',
  preserve_newlines: false,
  keep_array_indentation: false,
  break_chained_methods: false,
  indent_scripts: 'separate',
  brace_style: 'collapse',
  space_before_conditional: true,
  unescape_strings: false,
  jslint_happy: false,
  end_with_newline: false,
  wrap_line_length: '0',
  indent_inner_html: false,
  comma_first: false,
  e4x: false,
  indent_empty_lines: false
};

function isValidEditorJsData(blocks) {
  if (!Array.isArray(blocks) || !blocks[0] || _typeof(blocks[0]) !== 'object' || !type(blocks)) {
    return false;
  } else {
    return true;
  }
}

function isValidContentfulRteData(document) {
  if (_typeof(document) !== 'object' || !document.hasOwnProperty('nodeType') || document.nodeType !== 'document') {
    return false;
  } else {
    return true;
  }
}

function validate(blocks) {
  if (!blocks) {
    return false;
  } else if (!isValidContentfulRteData(blocks) && !isValidEditorJsData(blocks)) {
    return false;
  } else {
    return true;
  }
}

function type(blocks) {
  if (blocks[0] && _typeof(blocks[0]) === 'object' && blocks[0].hasOwnProperty('type')) {
    return 'editorJS';
  } else if (blocks.hasOwnProperty('nodeType')) {
    return 'contentfulRTE';
  } else {
    return null;
  }
}

function parseContentfulRTE(_ref) {
  var document = _ref.document,
      amp = _ref.amp;

  if (!amp) {
    return (0, _parser2["default"])(document);
  } else {
    return (0, _ampParser["default"])(document);
  }
}

function parseEditorJS(_ref2) {
  var blocks = _ref2.blocks,
      amp = _ref2.amp;
  var blockMap = amp ? _parser.ampParser : _parser.standardParser;
  return blocks.reduce(function (parsedString, block) {
    var resolver = blockMap.get(block.type);

    if (resolver) {
      return parsedString + resolver(block.data, _config["default"]);
    }

    return parsedString;
  }, '');
}

function data(_ref3) {
  var amp = _ref3.amp,
      blocks = _ref3.blocks;

  switch (type(blocks)) {
    case 'editorJS':
      return parseEditorJS({
        blocks: blocks,
        amp: amp
      });

    case 'contentfulRTE':
      return (0, _jsBeautify.html)(parseContentfulRTE({
        document: blocks,
        amp: amp
      }), formatOptions);

    default:
      return '';
  }
}

function parse(blocks) {
  var amp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!validate(blocks)) {
    return '';
  }

  return data({
    amp: amp,
    blocks: blocks
  });
}

var _default = parse;
exports["default"] = _default;