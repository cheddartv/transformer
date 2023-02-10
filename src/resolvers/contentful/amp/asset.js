import { image } from '.'

export default (node, next) => {
  const type = node.data.target.fields.file.contentType

  switch (type) {
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
    case 'image/gif':
      return image(node)
    default:
      return ''
  }
}
