import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class}">
    <embed class="${config.embed.form.class}" src="https://ugc.curds.io/formviewer/display/${node.content}">
  </div>`
