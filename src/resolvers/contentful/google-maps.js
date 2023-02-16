import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)

  if (src) {
    const height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) ? node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i)[1] : '450'
    const width = node.content.match(/<iframe.*?\bwidth="(.*?)".*?>/i) ? node.content.match(/<iframe.*?\bwidth="(.*?)".*?>/i)[1] : '600'

    return `
      <div class="${config.embed.class} ${config.embed['google-maps'].class}">
        <iframe
          src="${src[1]}"
          width="${width}"
          height="${height}"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>`
  } else {
    return ''
  }
}


