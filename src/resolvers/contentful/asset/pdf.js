import config from '../../../config'
import resolveImageDomain from "../../resolveImageDomain";

export default (node) => `<div class="${config.embed.class} ${config.asset.pdf.class}" data-url="https:${resolveImageDomain(node?.data?.target?.fields?.file?.url)}"></div>`
