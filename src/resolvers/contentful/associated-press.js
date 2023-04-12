import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)
  const height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) || 400

  return `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    <iframe
      src="${src}"
      scrolling="no"
      width="100%"
      style="border:1px solid #eee"
      height="${height}">
    </iframe>
  </div>`
}
