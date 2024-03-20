import resolveImageDomain from "./resolveImageDomain";

export default (data, config) => {
  return `<div>\n <img src=\"${resolveImageDomain(data.file.url)}\" alt=\"\"/>\n <em>${data.caption}</em>\n</div>\n`
}
