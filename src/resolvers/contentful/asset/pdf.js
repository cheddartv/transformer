import config from '../../../config'

export default (node) => `<div class="${config.embed.class} ${config.asset.pdf.class}" data-url="https:${node?.data?.target?.fields?.file?.url}"></div>`
