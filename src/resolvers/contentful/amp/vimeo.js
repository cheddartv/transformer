import { extractVimeoId } from "../common"
export default node => {
  if (extractVimeoId(node.content)) {
    return `<amp-vimeo data-videoid="${extractVimeoId(node.content)}" layout="responsive" width="300" height="200"></amp-vimeo>`
  } else {
    return ''
  }
}
