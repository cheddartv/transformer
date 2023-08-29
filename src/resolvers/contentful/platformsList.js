import config from '../../config'

export default (node) => {
  return `<div class="${config.embed.platformsList.class}">
            <p>${node?.data?.target?.fields?.title}</p>
              ${node?.data?.target?.fields?.platforms
                ?.map(
                  (platform) => `<div class="platform" data-name="${platform?.fields?.name}"
                                           data-url="${platform?.fields?.url}"
                                           data-background="${platform?.fields?.background}"
                                           data-backgroundHover="${platform?.fields?.backgroundColorHover}"
                                           data-logo="${platform?.fields?.logo?.fields?.file?.url}"
                                           data-logoTitle="${
                                             platform?.fields?.logo?.fields?.title || platform?.fields?.logo?.fields?.description
                                           }"
                                           data-logoHover="${platform?.fields?.logoHover?.fields?.file?.url}"></div>`
                )
                .join('')}
          </div>`
}
