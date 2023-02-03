import { standardParser, ampParser } from './parser'
import config from './config.js'

function validate(blocks) {
  if(!blocks || !Array.isArray(blocks) || !blocks[0] || typeof blocks[0] !== 'object' || !type(blocks)) {
    return false
  } else {
    return true
  }
}

function type(blocks) {
  if (blocks[0].hasOwnProperty('type')) {
    return 'editorJS'
  } else if (blocks[0].hasOwnProperty('nodeType')) {
    return 'contentfulRTE'
  } else {
    return null
  }
}

function parseContentfulRTE({ blocks, amp }) {
  return ''
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
      return parseContentfulRTE({ blocks, amp })
    default:
      return ''
  }
}

export default parse
