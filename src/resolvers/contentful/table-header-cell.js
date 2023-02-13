import { removeParagraphNode } from './common'

export default (node, next) => {
  const data = removeParagraphNode(node)
  return `<th>${next(data.content)}</th>`
}
