import config from '../../config'

export default (node) => `<div class="${config.embed.class}"><embed class="${config.embed.carousel.class}" src="https://ugc.curds.io/carousel/${node.content}"></div>`
