import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)

  if (src) {
    return `
      <div class="${config.embed.class} ${config.embed['google-maps'].class}">
        <iframe
          src="${src[1]}"
          height="400"
          style="border:0;width:100%;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>`
  } else {
    return ''
  }
}


