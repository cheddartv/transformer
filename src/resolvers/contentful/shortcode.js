import shortcodeParser from '../../util/shortcode-parser'
import { facebookResolver, formResolver, galleryResolver, spotimResolver, twitterResolver, youtubeResolver } from '.'

export default (node) => {
  const shortcode = shortcodeParser(node.content[0].value)

  switch (shortcode.name) {
    case 'facebook':
      return facebookResolver(shortcode)
    case 'spotim':
      return spotimResolver(shortcode)
    case 'twitter':
      return twitterResolver(shortcode)
    case 'youtube':
      return youtubeResolver(shortcode)
    case 'ugc-form':
      return formResolver(shortcode)
    case 'ugc-gallery':
      return galleryResolver(shortcode)
    case null:
    case undefined:
    default:
      return ''
  }
}
