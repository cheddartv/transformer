import config from '../../config'
import { extractYoutubeVideoId } from './common'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.youtube.class}">
    <iframe
      height="300"
      src="https://www.youtube.com/embed/${extractYoutubeVideoId(node.content)}"
      style="width:100%;"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>`
