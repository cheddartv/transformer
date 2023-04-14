import { urlType } from '../facebook'

export default (node) => {
  const { type, url } = urlType(node?.content)

  if (type === 'unknown') {
    return ''
  } else {
    return `
      <amp-facebook
        width="300"
        height="400"
        layout="responsive"
        data-embed-as="${type}"
        data-href="${url}">
      </amp-facebook>`
  }
}
