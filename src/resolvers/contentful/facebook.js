import config from '../../config'

function postId(url) {
  const regex = /facebook.com\/([^/]+)\/posts\/([^/]+)/
  const matches = url.match(regex)
  return matches ? `https://www.facebook.com/${matches[1]}/posts/${matches[2]}` : null
}

function videoId(url) {
  const regex = /facebook.com\/watch\/\?v=([^/]+)/
  const matches = url.match(regex)
  return matches ? `https://www.facebook.com/facebook/videos/${matches[1]}` : null
}

export function urlType(url) {
  if (postId(url)) {
    return { type: 'post', url: postId(url) }
  } else if(videoId(url)) {
    return { type: 'video', url: videoId(url) }
  } else {
    return { type: 'unknown', url: null }
  }
}

export default (node) =>{
  const { type, url } = urlType(node?.content)

  if (type === 'unknown') {
    return ''
  } else {
    return `
      <div class="${config.embed.class} ${config.embed.facebook.class}">
        <div class="fb-${type}" data-href="${url}"></div>
      </div>`
  }
}
