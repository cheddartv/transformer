import config from '../../config'

export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i) || 'https://interactives.ap.org/ap-polling-presidential-approval'
  const height = node.content.match(/<iframe.*?\bheight="(.*?)".*?>/i) || 400

  if (src) {
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
  } else {
    return ''
  }
}
