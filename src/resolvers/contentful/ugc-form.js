import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.form.class}">
    <iframe src="https://ugc.prod.alticeustech.com/formviewer/display/${node.content}" width="100%" height="770" scrolling="no" frameborder="0" allowfullscreen></iframe>
  </div>`
