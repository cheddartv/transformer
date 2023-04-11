import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.facebook.class}">
    <div id="fb-root"></div>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
    <div class="fb-post" data-allowfullscreen="true" data-href="${encodeURI(node?.content)}"></div>
  </div>`
