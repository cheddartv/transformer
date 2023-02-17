export default node =>
  `<amp-img
    width="600"
    height="338"
    layout="responsive"
    src="https:${node.data.target.fields.file.url}"
    alt=""></amp-img>
  <em>${node.data.target.fields.description}</em>`
