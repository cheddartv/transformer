import { html as beutifyHTML } from 'js-beautify'
import { standardParser, ampParser } from './parser'
import contentfulParser from './parser/contentful/parser'
import contentfulAmpParser from './parser/contentful/ampParser'
import config from './config.js'

const formatOptions = {
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
}

function isValidEditorJsData(blocks) {
  if (!Array.isArray(blocks) || !blocks[0] || typeof blocks[0] !== 'object' || !type(blocks)) {
    return false
  } else {
    return true
  }
}

function isValidContentfulRteData(document) {
  if (typeof document !== 'object' || !document.hasOwnProperty('nodeType') || document.nodeType !== 'document') {
    return false
  } else {
    return true
  }
}

function validate(blocks) {
  if (!blocks) {
    return false
  } else if (!isValidContentfulRteData(blocks) && !isValidEditorJsData(blocks)) {
    return false
  } else {
    return true
  }
}

function type(blocks) {
  if (blocks[0] && typeof blocks[0] === 'object' && blocks[0].hasOwnProperty('type')) {
    return 'editorJS'
  } else if (blocks.hasOwnProperty('nodeType')) {
    return 'contentfulRTE'
  } else {
    return null
  }
}

function parseContentfulRTE({ document, amp }) {
  if (!amp) {
    return contentfulParser(document)
  } else {
    return contentfulAmpParser(document)
  }
}

function parseEditorJS({ blocks, amp }) {
  const blockMap = amp ? ampParser : standardParser

  return blocks.reduce((parsedString, block) => {
    const resolver = blockMap.get(block.type)
    if (resolver) {
      return parsedString + resolver(block.data, config)
    }
    return parsedString
  }, '')
}

function data({ amp, blocks }) {
  switch (type(blocks)) {
    case 'editorJS':
      return parseEditorJS({ blocks, amp })
    case 'contentfulRTE':
     return beutifyHTML(parseContentfulRTE({ document: blocks, amp }), formatOptions)
    default:
      return ''
  }
}

function parse(blocks, amp = false) {
  if (!validate(blocks)) {
    return ''
  }

  return data({ amp, blocks })
}

export default parse
