import { removeParagraphNode } from './common'
import config from '../../config'

export default (node, next) => {
  const data = removeParagraphNode(node)
  return `<blockquote class="${config.quote.class}"><p>${next(data.content)}</p></blockquote>`
}
