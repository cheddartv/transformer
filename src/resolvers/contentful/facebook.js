import config from '../../config'

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.facebook.class}">
    <iframe
      src="https://www.facebook.com/plugins/post.php?href=${node.content}"
      width="${node.attributes.width || 500}"
      height="${node.attributes.height || 400}"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay;
      clipboard-write;
      encrypted-media;
      picture-in-picture;
      web-share"></iframe>
  </div>`
