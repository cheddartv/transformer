export default (data, config) => {
  /*
    {
      "data": {
        "file": {
          "url": "https://images.ctfassets.net/3kqcuzntcg31/7sTSYM9wGmxln9zJhH7K5T/91ce1c1453631278f7439d78afba1c6a/b9947fbf-49c7-46b0-8985-36c82a0ab5e7.png_width_1200_amp_auto_webp"
        },
        "caption": "",
        "stretched": false,
        "withBorder": false,
        "withBackground": false
      },
      "type": "image"
    }
 */
  return `<div>\n <img src=\"${data.file.url}\" alt=\"\"/>\n <em>${data.caption}</em>\n</div>\n`
}
