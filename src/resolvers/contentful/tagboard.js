import config from '../../config'

export default (node) => `<div class="${config.tagboard.class}" tgb-embed-id="${node.content}"></div>`
