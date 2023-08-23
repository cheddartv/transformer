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

const list = (node) => {
  return `<div class="${config.embed.storyList.class}">
  <p>${node?.data?.target?.fields?.name || 'Related stories'}</p>
  ${node?.data?.target?.fields?.stories
    ?.map((story) => {
      const hls = story?.fields?.videoFile?.fields?.videoUrls?.['application/x-mpegURL']
      const mp4 = story?.fields?.videoFile?.fields?.videoUrls?.['video/mp4']
      const duration = story?.fields?.videoFile?.fields?.duration
      const thumbnail = story?.fields?.thumbnail?.fields?.file?.url

      return `<div class="story" data-title="${story?.fields?.title}"
                     data-slug="${story?.fields?.slug}" 
                     data-published="${story?.fields?.publishedAt}"
                     ${thumbnail ? `data-thumb="${thumbnail}"` : ''} 
                     ${mp4 ? `data-mp4="${mp4}"` : ''}
                     ${hls ? `data-hls="${hls}"` : ''}
                     ${duration ? `data-duration="${duration}"` : ''}>
                  </div>`
    })
    .join('')}</div>`
}

const platformsList = (node) => {
  return `<div class="${config.embed.platformsList.class}">
  <p>${node?.data?.target?.fields?.name || 'Where To Watch'}</p>
  ${node?.data?.target?.fields?.platforms
    ?.map(
      (platform) => `<div class="platform" data-name="${platform?.fields?.name}"
                     data-url="${platform?.fields?.url}"
                     data-background="${platform?.fields?.background}"
                     data-backgroundHover="${platform?.fields?.backgroundColorHover}"
                     data-logo="${platform?.fields?.logo?.fields?.file?.url}"
                     data-logoTitle="${platform?.fields?.logo?.fields?.title || platform?.fields?.logo?.fields?.description}"
                     data-logoHover="${platform?.fields?.logoHover?.fields?.file?.url}"
                     data-logoHover="${platform?.fields?.logoHover?.fields?.file?.url}">
                  </div>`
    )
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
    case 'platformsList':
      return platformsList(node)
    default:
      return ''
  }
}
