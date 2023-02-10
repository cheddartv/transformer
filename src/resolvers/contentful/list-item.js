import { removeParagraphNode } from './common'

export default (node, next) => {
  const data = removeParagraphNode(node)
  return `<li>${next(data.content)}</li>`
}
