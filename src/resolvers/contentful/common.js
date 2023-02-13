export const removeParagraphNode = (node) => {
  return {
    ...node,
    content: [...node.content[0].content]
  }
}

export const isShortCode = (node) => {
  if (node.content[0].nodeType === 'text' && node.content[0].value.trim().startsWith('[') && node.content[0].value.trim().endsWith(']')) {
    return true
  } else {
    return false
  }
}

export const extractYoutubeVideoId = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}
