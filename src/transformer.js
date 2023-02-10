import { standardParser, ampParser } from './parser'
import contentfulParser from './parser/contentful/parser'
import config from './config.js'

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
  if(!blocks){
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
  }
}

function parseEditorJS({ blocks, amp }) {
  const blockMap = amp ? ampParser : standardParser

  return blocks.reduce((parsedString, block) => {
    const resolver = blockMap.get(block.type)
    if(resolver) {
      return parsedString + resolver(block.data, config)
    }
    return parsedString
  }, '')
}

function parse(blocks, amp = false) {
  if (!validate(blocks)) {
    return ''
  }

  switch (type(blocks)) {
    case null:
      return ''
    case 'editorJS':
      return parseEditorJS({ blocks, amp })
    case 'contentfulRTE':
      return parseContentfulRTE({ document: blocks, amp })
    default:
      return ''
  }
}

export default parse
