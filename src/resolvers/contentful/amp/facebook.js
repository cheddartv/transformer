function type(url) {
  const regex = /facebook.com\/[a-zA-Z0-9_]+\/(posts|videos)\//
  const match = url.match(regex)
  if (match) {
    return match[1] === 'posts' ? 'post' : 'video'
  }
  return 'post'
}

export default (node) =>
  `<amp-facebook width="${node.attributes.width || 552}" height="${
    node.attributes.height || 310
  }" layout="responsive" data-embed-as="${type(node.content)}" data-href="${node.content}"></amp-facebook>`
