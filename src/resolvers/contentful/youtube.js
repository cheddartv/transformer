import config from '../../config'

function extract(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

export default (node) =>
  `<div class="${config.embed.class} ${config.embed.youtube.class}">
    <iframe
      width="${node.attributes.width || 560}"
      height="${node.attributes.height || 315}"
      src="https://www.youtube.com/embed/${extract(node.content)}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>`
