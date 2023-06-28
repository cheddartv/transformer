import { video } from '.'
import config from '../../config'
import encodeHTML from '../../util/encodeHTML'

const fixInstagramScriptSrc = (html) =>
  html.replace(
    '<script async src="//www.instagram.com/embed.js"></script>',
    '<script async src="https://www.instagram.com/embed.js"></script>'
  )

const embed = (node) =>
  node?.data?.target?.fields?.type === 'instagram'
    ? `<div class='${config.embed.instagram}' data-embed='${encodeHTML(
        fixInstagramScriptSrc(node?.data?.target?.fields?.code)
      )}'></div>`
    : `<div class='${config.embed.class}'><div>${node?.data?.target?.fields?.code}</div></div>`

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
