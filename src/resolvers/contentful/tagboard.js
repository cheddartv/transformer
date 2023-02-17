import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed.tagboard.class}">
    <div class="${config.embed.tagboard.class}" tgb-embed-id="${node.content}"></div>
  </div>`
