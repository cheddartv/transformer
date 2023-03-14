export default (node) => {
  const match = node?.content.match(/status\/(\d+)/)
  if (match[1]) {
    return `<amp-twitter width="375" height="472" layout="responsive" data-tweetid="${match[1]}"></amp-twitter>`
  } else {
    return ''
  }
}
