export default (node) => {
  return `<div class="${config.embed.storyList.class}">
  <p>${node?.data?.target?.fields?.name || 'Related Stories'}</p>
  ${node?.data?.target?.fields?.stories
    ?.map((story) => {
      const hls = story?.fields?.videoFile?.fields?.videoUrls?.['application/x-mpegURL']
      const mp4 = story?.fields?.videoFile?.fields?.videoUrls?.['video/mp4']
      const duration = story?.fields?.videoFile?.fields?.duration
      const thumbnail = story?.fields?.thumbnail?.fields?.file?.url

      return `<div class="story">
      <p class="timestamp">${story?.fields?.publishedAt}</p>
        <p class="title">${story?.fields?.title}</p>
                     data-slug="${story?.fields?.slug}" 
                     data-published=""
                     ${thumbnail ? `data-thumb="${thumbnail}"` : ''} 
                     ${mp4 ? `data-mp4="${mp4}"` : ''}
                     ${hls ? `data-hls="${hls}"` : ''}
                     ${duration ? `data-duration="${duration}"` : ''}>
                  </div>`
    })
    .join('')}</div>`
}