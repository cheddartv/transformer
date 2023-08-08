import config from '../../config'

export default (node) =>
  `<div
    class="${config.asset.video.class}"
    data-title="${node.data.target.fields.file.title}"
    data-type="${node.data.target.fields.file.contentType}"
    data-description="${node.data.target.fields.description}"
    data-src="https://${node.data.target.fields.file.url}#t=0.001"></div>`
