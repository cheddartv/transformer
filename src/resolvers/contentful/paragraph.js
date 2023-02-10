import config from '../../config'
import shortcodeResolver from './shortcode.js'

const isShortCode = (node) => {
  if (node.content[0].nodeType === 'text' && node.content[0].value.trim().startsWith('[') && node.content[0].value.trim().endsWith(']')) {
    return true
  } else {
    return false
  }
}

export default (node, next) => {
  if (isShortCode(node)) {
    return shortcodeResolver(node)
  } else {
    return `<div class=\"${config.paragraph.class}\">${next(node.content)}</div>`
  }
}
