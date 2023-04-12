import config from '../../config'

export default (node) => {

  const iframe = node.content.match(/<iframe.*?<\/iframe>/i)[0]

  return `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    ${iframe}
  </div>`
}
