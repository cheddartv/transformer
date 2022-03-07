export default (data, config) => {
  let alignment = ""
  if (config.quote.applyAlignment) {
    alignment = `style="text-align: ${data.alignment};"`
  }
  /*
  <blockquote class=\"left\">\n  <p>Do the best you can do</p>\n  <footer></footer>\n</blockquote>\n


  <blockquote class=\"left\">\n  <p>Do the best you can do</p>\n  <footer></footer>\n</blockquote>\n

   */
  return `<blockquote ${alignment}><p>${data.text}</p><cite>${data.caption}</cite></blockquote>`
}
