import { video } from '.'
import config from '../../config'

const embed = (node) => `<div class="${config.embed.class}"><div>${node.data.target.fields.code}</div></div>`

export default (node, next) => {
  const type = node.data.target.sys.contentType.sys.id

  switch (type) {
    case 'videoFile':
      return video(node)
    case 'embed':
      return embed(node)
    default:
      return ''
  }
}