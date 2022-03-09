module.exports = (data, config) => {
  return `<div class=\"${config.paragraph.class}\"> ${data.text} </div>` //paragraph is a div with block class
}
