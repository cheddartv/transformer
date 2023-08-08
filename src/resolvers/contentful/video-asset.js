import config from '../../config'

export default (node) =>
  `<div
    class="${config['video-asset'].class}"
    data-title="${node.data.target.fields.file.title}"
    data-type="${node.data.target.fields.file.contentType}"
    data-src="https://${node.data.target.fields.file.url}#t=0.001"></div>`
