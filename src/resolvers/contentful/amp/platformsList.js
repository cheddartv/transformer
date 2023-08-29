import config from '../../../config'

export default (node) => {
  return `<div class="${config.embed.platformsList.class}">
            <p class="platforms-title">${node?.data?.target?.fields?.title}</p>
            <div class="platforms-container">
            ${node?.data?.target?.fields?.platforms
              ?.map((platform) => {
                return `<a class="platform-link" href="${platform?.fields?.url}">
                          <div class="platform" style="background: ${platform?.fields?.background}">
                            <img src="https:${platform?.fields?.logo?.fields?.file?.url}" alt="${platform?.fields?.logo?.fields?.title}">
                          </div>
                        </a>`
              })
              .join(``)}
            </div>
          </div>`
}
