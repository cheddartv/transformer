import { extractTikTokVideoId } from './common'
import config from '../../config'

export default (node) => {
  if (extractTikTokVideoId(node.content)) {
    return  `
      <div class="${config.embed.class} ${config.embed.tiktok.class}">
        <blockquote class="tiktok-embed" cite="${node.content}" data-video-id="${extractTikTokVideoId(node.content)}" style="max-width: 605px;min-width: 325px;" > </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>`
  } else {
    return ''
  }
}
