export default (node) => {
  return `<div class="story-list">
  <p class="story-list-title">${node?.data?.target?.fields?.name || 'Related Stories'}</p>
  ${node?.data?.target?.fields?.stories
    ?.map(
      (story) => `<div class="story">
                          <a className='story' href=${story?.fields?.slug}>
                            <span className='timestamp'>${story?.fields?.publishedAt}</span>
                            <p className='title'>${story?.fields?.title}</p>
                          </a>
                        </div>`
    )
    .join('')}</div>`
}
