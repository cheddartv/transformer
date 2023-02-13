import { image, pdf } from '.'

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
    default:
      return ''
  }
}
