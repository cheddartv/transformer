import config from '../../config'

export default (node) => z`
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    ${node.content}
  </div>`
