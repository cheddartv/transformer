import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)
  const height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i)

  return `
    <div class="${config.embed.class} ${config.embed['associated-press'].class}">
      <iframe
            src="${src[1]}"
            height="${height[1]}"
            style="border:0;width:100%;"
          </iframe>
    </div>`
}
