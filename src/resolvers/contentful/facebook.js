import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.facebook.class}">
    <iframe
      src="https://www.facebook.com/plugins/post.php?href=${encodeURI(node.content)}&width=auto"
      height="400"
      style="border:none;overflow:hidden;width:100%"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay;
      clipboard-write;
      encrypted-media;
      picture-in-picture;
      web-share"></iframe>
  </div>`
