const embedTypes = {
  YOUTUBE: 'youtube', //Done
  CHEDDAR_VIDEO: 'cheddar', //Done
  FACEBOOK: 'facebook', //Todo: don't have an example of one
  UGC_CAROUSEL: 'ugc_carousel',
  UGC_FORM: 'ugc_form'
}

export default (data, config) => {
  //If youtube
  return `<div class=\"${config.embed.class}\" style=\"width: ${data.width}px;\">
    <embed class=\"${config.embed.class}\" height=\"${data.height}\" width=\"${data.width}\" src=\"${data.embed}\">  <em>${data.caption}</em></div>`

  //If cheddar video
  return `<div class=\"${config.embed.class}\" style=\"width: ${data.width}px;\">
    <embed class=\"${config.embed.class}\" height=\"${data.height}\" width=\"${data.width}\"
    src=\"${data.embed}\">
    <em>${data.caption}</em></div>`

  //If ugc carousel
  return `<div class=\"${config.embed.class}\">
    <embed class=\"${config.carousel.class}\" src=\"${data.embed}\">  <em>${data.caption}</em></div>`

  //If ugc form
  return `<div class=\"${config.embed.class}\">
    <embed class=\"\" src=\"${data.embed}\">  <em>${data.caption}</em></div>`

  //TODO: Facebook video
  //Dont have a facebook video as an example, I dont have a facebook example
  return ``
}
