import { image, pdf, video } from './index'

export default (node) => {
  const type = node?.data?.target?.fields?.file?.contentType

  switch (type) {
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/png':
    case 'image/gif':
      return image(node)
    case 'application/pdf':
      return pdf(node)
    case 'video/mp4':
      return video(node)
    default:
      return ''
  }
}
