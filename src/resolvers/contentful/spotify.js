import { extractSpotifyId } from './common'
import config from '../../config'

export default node => {
  if (extractSpotifyId(node.content)) {
    return `
    <div class="${config.embed.class} ${config.embed.spotify.class}">
      <iframe
        width="100%"
        height="200"
        scrolling="no"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        src="https://open.spotify.com/embed${extractSpotifyId(node?.content)}">
      </iframe>
    </div>`
  } else {
    return ''
  }
}
