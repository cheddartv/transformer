import config from '../../config'

export default (node) =>
`<div
  class=\"${config.video.class}\"
  data-caption=\"${node.data.target.fields.description || ''}\"
  data-isLive=\"${node.data.target.fields.isLive}\"
  data-src=\"${node.data.target.fields.videoUrls['application/x-mpegURL']}\"
></div>`
