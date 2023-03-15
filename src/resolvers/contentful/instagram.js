import config from '../../config'

export const extractInstagramPath = url => {
  const pattern = /^https?:\/\/(?:www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9-_]+)/
  const match = url.match(pattern)

  if (match) {
    const path = match[1]
    const id = match[2]
    return `${path}/${id}`
  } else {
    return false
  }
}

export default node => {
  if (extractInstagramPath(node?.content)) {
    return `
      <div class="${config.embed.class} ${config.embed.instagram.class}">
        <iframe width="100%" height="400" src="https://www.instagram.com/${extractInstagramPath(node?.content)}/embed" frameborder="0"></iframe>
      </div>`
  } else {
    return ''
  }
}

