import {video} from '.'
import config from '../../config'

const embed = (node) => {
  if (node?.data?.target?.fields?.type === 'instagram') {
    return `<div class="instagram-${config.embed.class}" data-embed='${node?.data?.target?.fields?.code}'></div>`
  }
  return `<div class="${config.embed.class}"><div>${node?.data?.target?.fields?.code}</div></div>`
}

export default (node) => {
  const type = node?.data?.target?.sys?.contentType?.sys?.id

  switch (type) {
    case 'videoFile':
      return video(node)
    case 'embed':
      return embed(node)
    default:
      return ''
  }
}
