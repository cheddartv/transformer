export default (data, config) => {
  const type = data.type ? data.type : 'video/mp4'
  return `<div class=\"${config.video.class}\" data-caption=\"${data.caption}\" data-isLive=\"${data.isLive}\" data-src=\"${data.url}\" data-type=\"${type}\"></div>`
}
