import config from '../../config'

export default (node) => {

  const iframe = node.content.match(/<iframe.*?>/i)

  return `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    ${iframe}
  </div>`
}
