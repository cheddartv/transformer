module.exports = (data, config) => {
  return `<h${data.level}>${data.text}</h${data.level}>`
}
