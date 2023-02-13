import { removeParagraphNode } from './common'

export default (node, next) => {
  const data = removeParagraphNode(node)
  return `<td>${next(data.content)}</td>`
}
