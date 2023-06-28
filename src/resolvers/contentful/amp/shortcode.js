import shortcodeParser from '../../../util/shortcode-parser'
import {
  associatedPress,
  facebook,
  form,
  gallery,
  googleMaps,
  soundcloud,
  spotify,
  tagboard,
  tiktok,
  twitter,
  youtube,
  vimeo
} from '.'

export default (node) => {
  const shortcode = shortcodeParser(node?.content?.[0]?.value)

  switch (shortcode.name) {
    case 'associated-press':
      return associatedPress(shortcode)
    case 'facebook':
      return facebook(shortcode)
    case 'google-maps':
      return googleMaps(shortcode)
    case 'soundcloud':
      return soundcloud(shortcode)
    case 'spotim':
      return ''
    case 'spotify':
      return spotify(shortcode)
    case 'tagboard':
      return tagboard(shortcode)
    case 'tiktok':
      return tiktok(shortcode)
    case 'twitter':
      return twitter(shortcode)
    case 'ugc-form':
      return form(shortcode)
    case 'ugc-gallery':
      return gallery(shortcode)
    case 'youtube':
      return youtube(shortcode)
    case 'vimeo':
      return vimeo(shortcode)
    default:
      return ''
  }
}
