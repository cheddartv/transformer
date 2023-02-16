import { extractVimeoId } from './common'
import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.vimeo.class}">
    <iframe
      width="${node.attributes.width || 500}"
      height="${node.attributes.height || 400}"
      src="https://player.vimeo.com/video/${extractVimeoId(node.content)}"
      title="Vimeo video player"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture">
    </iframe>
  </div>`
