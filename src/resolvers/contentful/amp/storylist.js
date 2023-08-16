import formatTime from '../../../util/format-time'

export default (node) => {
  return `<div class="story-list" data-testid="story-list">
    <p class="title">${node?.data?.target?.fields?.name || 'Related stories'}</p>
    ${node?.data?.target?.fields?.stories
      ?.map((story) => {
        return `<div class="story">
                                <a className='story' href="${story?.fields?.slug}">
                                  <span className='timestamp'>${formatTime(story?.fields?.publishedAt)}</span>
                                  <p className='title'>${story?.fields?.title}</p>
                                </a>
                              </div>`
      })
      .join('')}</div>`
}
