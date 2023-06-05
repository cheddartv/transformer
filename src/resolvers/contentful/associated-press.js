import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)
  const height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) || 400

  if (src) {
    return `
      <div class="${config.embed.class} ${config.embed['associated-press'].class}">
        <iframe
          src="${src[1]}"
          height="${height[1]}"
          style="border: 1px solid #eee;width:100%;">
        </iframe>
      </div>`
  } else {
    return ''
  }
}
