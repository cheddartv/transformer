import { video } from '.'

export default (node, next) => {
  const type = node.data.target.sys.contentType.sys.id

  switch (type) {
    case 'videoFile':
      return video(node)
    default:
      return ''
  }
}
