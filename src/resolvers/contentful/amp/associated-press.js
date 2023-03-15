export default (node) =>`
  <amp-iframe
    layout="responsive"
    width="300"
    height="300"
    sandbox="allow-scripts allow-same-origin"
    src="${node?.content}">
    <amp-img placeholder
      src="/loading-animation.gif"
      height="64"
      width="64"
      layout="fixed">
    </amp-img>
  </amp-iframe>`
