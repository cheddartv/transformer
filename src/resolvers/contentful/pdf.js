import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.asset.class}">
    <iframe
      src="https://docs.google.com/viewerng/viewer?url=https:${node.data.target.fields.file.url}&embedded=true"
      height="820"
      style="width:100%;"
      seamless
      sandbox="allow-scripts allow-same-origin"
      frameborder="0">
    </iframe>
  </div>`
