import { youtubeResolver } from "./index"
import { cheddarResolver} from "./index"
import { carouselResolver} from "./index";
import { formResolver } from "./index";
import { facebookResolver } from "./index"

const embedTypes = {
  YOUTUBE: 'youtube',
  CHEDDAR_VIDEO: 'cheddar',
  FACEBOOK: 'facebook',
  UGC_CAROUSEL: 'ugc_carousel',
  UGC_FORM: 'ugc_form'
}

const embedRenderMap = new Map()
embedRenderMap.set(embedTypes.YOUTUBE, youtubeResolver)
embedRenderMap.set(embedTypes.CHEDDAR_VIDEO, cheddarResolver)
embedRenderMap.set(embedTypes.UGC_CAROUSEL, carouselResolver)
embedRenderMap.set(embedTypes.UGC_FORM, formResolver)
embedRenderMap.set(embedTypes.FACEBOOK, facebookResolver)

//You can expect to get the full block here
//TODO: Facebook video

export default (data, config) => {
  const renderer = embedRenderMap.get(data.service)
  if(renderer) {
    return renderer(data, config)
  }
  else
    return ''
}


