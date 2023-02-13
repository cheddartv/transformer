export default (node) =>
  `<div><img src="https:${node.data.target.fields.file.url}" alt=""/><em>${node.data.target.fields.description}</em></div>`
