import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed['associated-press'].class}">
    <iframe
      src="${node?.content}"
      scrolling="no"
      width="100%"
      style="border:none"
      height="400">
    </iframe>
  </div>`
