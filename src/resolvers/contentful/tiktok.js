import { extractTikTokVideoId } from './common'
import config from '../../config'

export default (node) => {
  if (extractTikTokVideoId(node.content)) {
    return  `
      <div class="${config.embed.class} ${config.embed.tiktok.class}">
        <iframe src="https://www.tiktok.com/embed/${extractTikTokVideoId(node.content)}" allowfullscreenscrolling="no" allow="encrypted-media;" style="border:none;width:100%;" height="740"></iframe>
      </div>`
  } else {
    return ''
  }
}
