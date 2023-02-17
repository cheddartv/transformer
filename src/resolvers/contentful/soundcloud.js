import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed.soundcloud.class}">
    <iframe
      width="100%"
      height="180"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=${node.content}">
    </iframe>
  </div>`
