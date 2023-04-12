import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    ${node.content.value}
  </div>`
