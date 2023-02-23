import { extractYoutubeVideoId } from '../common'

export default (node) =>
  `<amp-youtube
    data-videoid="${extractYoutubeVideoId(node.content)}"
    layout="responsive"
    width="300"
    height="200">
  </amp-youtube>`
