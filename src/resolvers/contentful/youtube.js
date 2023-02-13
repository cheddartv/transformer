import config from '../../config'
import { extractYoutubeVideoId } from './common'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.youtube.class}">
    <iframe
      width="${node.attributes.width || 560}"
      height="${node.attributes.height || 315}"
      src="https://www.youtube.com/embed/${extractYoutubeVideoId(node.content)}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>`
