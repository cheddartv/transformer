import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.carousel.class}">
    <iframe src="https://ugc.alticeustech.com/carousel/${node.content}" width="100%" height="770" scrolling="no" frameborder="0" allowfullscreen></iframe>
  </div>`
