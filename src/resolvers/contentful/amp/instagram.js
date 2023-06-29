export default (node) => {
  const match = node.content.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)(?:\/|\?|$)/)

  if (match[1]) {
    return `<amp-instagram data-shortcode="${match[1]}" width="350" height="300" layout="responsive"></amp-instagram>`
  } else {
    return ''
  }
}