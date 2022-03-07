export default (data, config) => {
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
}
