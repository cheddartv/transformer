import formatTime from '../../../util/format-time'

export default (node, config) => {
  return `<div class="${config.embed.storyList.class}">
  <p>${node?.data?.target?.fields?.name || 'Related Stories'}</p>
  ${node?.data?.target?.fields?.stories
    ?.map(
      (story) => `<div class="story">
                          <a className='story' href=${story?.fields?.slug}>
                            <span className='timestamp'>{${formatTime(story?.fields?.publishedAt)}}</span>
                            <p className='title'>${story?.fields?.title}</p>
                          </a>
                        </div>`
    )
    .join('')}</div>`
}
