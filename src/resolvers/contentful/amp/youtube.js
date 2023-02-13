import { extractYoutubeVideoId } from '../common'

export default (node) =>
  `<amp-youtube data-videoid="${extractYoutubeVideoId(node.content)}" layout="responsive" width="${node.attributes.width}" height="${node.attributes.height}"></amp-youtube>`
