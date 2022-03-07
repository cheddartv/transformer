export default {
  paragraph : (data, config) => {
    return `<div class="${config.paragraph.blockClass}"> ${data.text} </div>` //paragraph is a div with block class
  },
  header: (data, config) => {
    return `<h${data.level}>${data.text}</h${data.level}>`  //header has no class
  },
  list: (data, config) => {    //TODO: not sure how list looks like
    /*
      {
        "type" : "list",
        "data" : {
          "style" : "unordered",
          "items" : [
            "This is a block-styled editor",
            "Clean output data",
            "Simple and powerful API"
          ]
        }
      }
    */
    /*
        <div class=\"list\"><ol><li>Blan blah list item 1</li><li>Second item is also just for an example</li><li>Third example is total waste of time</li></ol></div>
     */
    const type = data.style === "ordered" ? "ol" : "ul"
    const items = data.items.reduce((acc, item) => acc + `<li>${item}</li>`, "")
    return `<${type}>${items}</${type}>`
  },
  image: (data, config) => {
    //TODO: take care of this
    //Image has no class as well, it does have <em> tags
    return `<div><img src="${data.file.url}" alt=\"\"/><em>${data.caption}</em></div>`
  },
  embed: (data, config) => {
    //TODO: Take care of embed type
    //There are different types of embed
    //Youtube is probably an embed type
    // YOUTUBE
    /*
    <div class=\"embed\" style=\"width: 580px;\">  <embed class=\"embed\" height=\"320\" width=\"580\" src=\"https://www.youtube.com/embed/BDBnm9i_DBE\">  <em></em></div>
     */

    //UGC embed
    /*
    <div class=\"embed\" style=\"width: px;\">  <embed class=\"carousel-embed\" height=\"\" width=\"\" src=\"https://ugc.curds.io/carousel/8\">  <em></em></div>
     */
  },
  twitter: (data, config) => {
    return `<blockquote class=\"twitter-tweet\">\n <a href=\"${data.url}\"></a>\n
    </blockquote>\n`
  },
  quote: function(data, config) {
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
}
