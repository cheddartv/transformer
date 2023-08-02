import { video } from '.'
import { encode } from 'he'
import config from '../../config'
import parser from '../../parser/contentful/parser'

const fixInstagramScriptSrc = (html) =>
  html.replace(
    '<script async src="//www.instagram.com/embed.js"></script>',
    '<script async src="https://www.instagram.com/embed.js"></script>'
  )

const embed = (node) => {
  if (node?.data?.target?.fields?.code.startsWith('<blockquote class="instagram-media"')) {
    return `<div class='${config.embed.instagram.class}' 
                 data-embed='${encode(fixInstagramScriptSrc(node?.data?.target?.fields?.code))}'></div>`
  } else {
    return `<div class='${config.embed.class}'><div>${node?.data?.target?.fields?.code}</div></div>`
  }
}

const storyList = (node) =>
  node?.data?.target?.fields?.stories?.map((node) => {
    return `<div class='storyListItem'><div>${node?.data?.target?.fields?.title}</div></div>`
  })

export default (node) => {
  const type = node?.data?.target?.sys?.contentType?.sys?.id

  switch (type) {
    case 'videoFile':
      return video(node)
    case 'embed':
      return embed(node)
    case 'storyList':
      return storyList(node)
    default:
      return ''
  }
}
