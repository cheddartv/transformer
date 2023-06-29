import { video } from '.'
import instagram from './instagram'

export default (node) => {
  const type = node?.data?.target?.sys?.contentType?.sys?.id

  switch (type) {
    case 'videoFile':
      return video(node)
    case 'embed':
      if (node?.data?.target?.fields?.code.startsWith('<blockquote class="instagram-media"')) {
        return instagram(node)
      }
      break
    default:
      return ''
  }
}
