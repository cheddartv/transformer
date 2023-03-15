import { extractTikTokVideoId } from '../common'

export default (node) => {
  if (extractTikTokVideoId(node?.content)) {
    return `<amp-tiktok width="325" height="575" data-src="${extractTikTokVideoId(node?.content)}"></amp-tiktok>`
  } else {
    return ''
  }
}
