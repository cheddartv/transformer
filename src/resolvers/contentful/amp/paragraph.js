import config from '../../../config'
import shortcodeResolver from './shortcode.js'
import { isShortCode } from '../common'

export default (node, next) => {
  if (isShortCode(node)) {
    return shortcodeResolver(node)
  } else {
    return `<div class="${config.paragraph.class}">${next(node.content)}</div>`
  }
}
