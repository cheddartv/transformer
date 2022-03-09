const youtubeRenderer = require('./youtube')
const cheddarRenderer = require('./video')
const carouselRenderer = require('./carousel')
const formRenderer = require('./form')
const facebookRenderer = require('./facebook')

const embedTypes = {
  YOUTUBE: 'youtube',
  CHEDDAR_VIDEO: 'cheddar',
  FACEBOOK: 'facebook',
  UGC_CAROUSEL: 'ugc_carousel',
  UGC_FORM: 'ugc_form'
}

const embedRenderMap = new Map()
embedRenderMap.set(embedTypes.YOUTUBE, youtubeRenderer)
embedRenderMap.set(embedTypes.CHEDDAR_VIDEO, cheddarRenderer)
embedRenderMap.set(embedTypes.UGC_CAROUSEL, carouselRenderer)
embedRenderMap.set(embedTypes.UGC_FORM, formRenderer)
embedRenderMap.set(embedTypes.FACEBOOK, facebookRenderer)

//You can expect to get the full block here
//TODO: Facebook video

module.exports = (data, config) => {
  const renderer = embedRenderMap.get(data.service)
  if(renderer) {
    return renderer(data, config)
  }
  else
    return ''
}


