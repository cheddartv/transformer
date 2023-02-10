import image from './image'
import pdf from './pdf'

export default (node, next) => {
  const type = node.data.target.fields.file.contentType

  switch (type) {
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
    case 'image/gif':
      return image(node)
    case 'application/pdf':
      return pdf(node)
    case null:
    case undefined:
    default:
      return ''
  }
}
