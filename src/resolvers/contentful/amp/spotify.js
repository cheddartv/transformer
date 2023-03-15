import { extractSpotifyId } from '../common'

export default node => {
  if (extractSpotifyId(node?.content)) {
    return `
      <amp-iframe
        layout="responsive"
        width="300"
        height="100"
        sandbox="allow-scripts allow-same-origin"
        src="https://open.spotify.com/embed${extractSpotifyId(node?.content)}">
        <amp-img placeholder
          src="/loading-animation.gif"
          height="64"
          width="64"
          layout="fixed">
        </amp-img>
      </amp-iframe>`
  } else {
    return ''
  }
}
