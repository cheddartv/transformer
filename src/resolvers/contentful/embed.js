import { video } from '.'
import { encode } from 'he'
import config from '../../config'

const fixInstagramScriptSrc = (html) =>
  html.replace(
    '<script async src="//www.instagram.com/embed.js"></script>',
    '<script async src="https://www.instagram.com/embed.js"></script>'
  )

const embed = (node) => {
  const codeSnippet = node?.data?.target?.fields?.code
  switch (codeSnippet) {
    case codeSnippet.startsWith('<blockquote class="instagram-media"'):
      return `<div class='${config.embed.instagram.class}' 
                 data-embed='${encode(fixInstagramScriptSrc(node?.data?.target?.fields?.code))}'></div>`
    case codeSnippet.includes('https://portal.cityspark.com/PortalScripts/news12'):
      return `<div class='${config.embed.citySpark.class}' 
                 data-embed='${node?.data?.target?.fields?.code}'></div>`
    default:
      return `<div class='${config.embed.class}'><div>${node?.data?.target?.fields?.code}</div></div>`
  }
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
