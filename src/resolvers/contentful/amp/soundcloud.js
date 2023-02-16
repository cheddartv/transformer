export default (node) =>`
<amp-iframe
  layout="responsive"
  width="300"
  height="100"
  sandbox="allow-scripts allow-same-origin"
  src="https://w.soundcloud.com/player/?url=${node.content}">
  <amp-img placeholder
    src="/loading-animation.gif"
    height="64"
    width="64"
    layout="fixed">
  </amp-img>
</amp-iframe>`
