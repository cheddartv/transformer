import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.spotim.class}"><script src="https://launcher.spot.im/spot/${node.attributes.organization}" data-spotim-module="spotim-launcher" data-live-blog="true" data-live-event-code="${node.content}" data-enable-live-blog-replies="false"></script></div>`
