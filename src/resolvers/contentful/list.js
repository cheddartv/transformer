import config from '../../config'

export default (node, next) => {
  const type = node.nodeType === 'ordered-list' ? 'ol' : 'ul'
  return `<div class="${config.list.class}"><${type}>${next(node.content)}</${type}></div>`
}
