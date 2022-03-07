export default (data, config) => {
  //TODO: take care of this
  //Image has no class as well, it does have <em> tags
  return `<div><img src="${data.file.url}" alt=\"\"/><em>${data.caption}</em></div>`
}
