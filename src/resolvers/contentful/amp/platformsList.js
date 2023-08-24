import config from '../../../config'

export default (node) => {
  return `<div class="${config.embed.platformsList.class}">
    <p class="title">${node?.data?.target?.fields?.name || 'Where To Watch'}</p>
    <div class="platforms-container">
    ${node?.data?.target?.fields?.platforms
      ?.map((platform) => {
        return `<a class="platform-link" "${platform?.fields?.url}">
                                <div class="platform">
                                  <img src="https:${platform?.fields?.logoHover?.fields?.file?.url}" alt="${platform?.fields?.logo?.fields?.title}">
                                </div>
                              </a>`
      })
      .join('')}</div></div>`
}
