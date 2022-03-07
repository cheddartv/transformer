export default (data, config) => {
  return `<div class="${config.paragraph.blockClass}"> ${data.text} </div>` //paragraph is a div with block class
}
