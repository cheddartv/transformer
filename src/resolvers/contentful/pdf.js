import config from '../../config'

export default (node) =>
  `<div
    class="${config.asset.class}"
    data-type="${node.data.target.fields.file.contentType}"
    data-src="https:${node.data.target.fields.file.url}">
  </div>`
