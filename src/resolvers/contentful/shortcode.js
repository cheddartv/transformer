import shortcodeParser from '../../util/shortcode-parser'
import { facebook, form, gallery, spotim, tagboard, twitter, youtube } from '.'

export default (node) => {
  const shortcode = shortcodeParser(node.content[0].value)

  switch (shortcode.name) {
    case 'facebook':
      return facebook(shortcode)
    case 'spotim':
      return spotim(shortcode)
    case 'tagboard':
      return tagboard(shortcode)
    case 'twitter':
      return twitter(shortcode)
    case 'ugc-form':
      return form(shortcode)
    case 'ugc-gallery':
      return gallery(shortcode)
    case 'youtube':
      return youtube(shortcode)
    default:
      return ''
  }
}
