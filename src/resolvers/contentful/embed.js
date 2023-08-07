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

    case codeSnippet.includes('https://portal.cityspark.com/PortalScripts'):
      return `<div class='${config.embed.citySpark.class}' 
                 data-embed='${node?.data?.target?.fields?.code}'></div>`

    default:
      return `<div class='${config.embed.class}'><div>${node?.data?.target?.fields?.code}</div></div>`
  }
}

const list = (node) => {
  return `<div class=${config.embed.storyList.class}'>${node?.data?.target?.fields?.stories
    ?.map((story) => {
      const hls = story?.fields?.videoFile?.fields?.videoUrls?.['application/x-mpegURL']
      const mp4 = story?.fields?.videoFile?.fields?.videoUrls?.['video/mp4']
      const duration = story?.fields?.videoFile?.fields?.duration
      const thumbnail = story?.fields?.thumbnail?.fields?.file?.url

      return `<div class='story' data-title='${story?.fields?.title}'
                     data-slug='${story?.fields?.slug}' 
                     data-published='${story?.fields?.publishedAt}'
                     ${thumbnail ? `data-thumb='${thumbnail}'` : ''} 
                     ${mp4 ? `data-mp4='${mp4}'` : ''}
                     ${hls ? `data-hls='${hls}'` : ''}
                     ${duration ? `data-duration='${duration}'` : ''}>
                  </div>`
    })
    .join('')}</div>`
}

export default (node) => {
  const type = node?.data?.target?.sys?.contentType?.sys?.id

  switch (type) {
    case 'videoFile':
      return video(node)
    case 'embed':
      return embed(node)
    case 'list':
      return list(node)
    default:
      return ''
  }
}
