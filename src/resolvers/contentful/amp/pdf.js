export default (node) =>
  `<amp-google-document-embed
    src="https:${node.data.target.fields.file.url}"
    width="300"
    height="500"
    layout="responsive">
  </amp-google-document-embed>`


