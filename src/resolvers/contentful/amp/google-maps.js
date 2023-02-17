export default (node) => {
  const src = node.content.match(/<iframe.*?\bsrc="(.*?)".*?>/i)

  if (src) {
    return `
      <amp-iframe
        width="300"
        height="400"
        title="Google maps"
        layout="responsive"
        frameborder="0"
        sandbox="allow-scripts allow-same-origin"
        src="${src[1]}">
        <amp-img placeholder
          src="/loading-animation.gif"
          height="64"
          width="64"
          layout="fixed">
        </amp-img>
      </amp-iframe>`
  } else {
    return ''
  }
}




