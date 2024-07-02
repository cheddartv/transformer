export const removeParagraphNode = node => {
  return {
    ...node,
    content: [...node?.content?.[0]?.content]
  }
}

export const isShortCode = node => {
  if (node?.content?.[0]?.nodeType === 'text' && node?.content?.[0]?.value?.trim().startsWith('[') && node?.content?.[0]?.value?.trim().endsWith(']')) {
    return true
  } else {
    return false
  }
}

export const extractYoutubeVideoId = url => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}

export const extractTikTokVideoId = url => {
  const regExp = /\/video\/(\d+)/
  const match = url.match(regExp)
  return match && match[1].length ? match[1] : false
}

export const extractVimeoId = url => {
  const regex = /(?:\/)(\d+)(?:$|\/|\?)/
  const match = url.match(regex)
  return match ? match[1] : false
}

export const extractSpotifyId = url => {
  const regex = /(\/(track|playlist)\/[a-zA-Z0-9]+)+/
  const match = url.match(regex)
  return match ? match[0] : false
}

export const extractInstagramId = url => {
  const regex = /https:\/\/www\.instagram\.com\/p\/([a-zA-Z0-9_-]+)\//
  const match = url.match(regex)
  return match ? match[1] : false
}
