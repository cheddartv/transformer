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

  const findTerm = (term) => {
    if (codeSnippet.includes(term)) {
      return codeSnippet
    }
  }

  switch (codeSnippet) {
    case findTerm('<blockquote class="instagram-media"'):
      return `<div class='${config.embed.instagram.class}' 
                 data-embed='${encode(fixInstagramScriptSrc(codeSnippet))}'></div>`

    case findTerm('https://portal.cityspark.com/PortalScripts'):
      return `<div class='${config.embed['city-spark'].class}' 
                 data-embed='${encode(codeSnippet)}'></div>`

    default:
      return `<div class='${config.embed.class}'><div>${codeSnippet}</div></div>`
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
