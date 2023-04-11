import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.facebook.class}">
    <div class="fb-video" data-allowfullscreen="true" data-href="${encodeURI(node?.content)}"></div>
  </div>`
