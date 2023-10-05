import config from '../../config'
import resolveImageDomain from "../resolveImageDomain";

export default (node) =>
  `<div
    class="${config.video.class}"
    data-poster="https:${resolveImageDomain(node?.data?.target?.fields?.thumbnail?.fields?.file?.url)}?fit=fill&w=1920&h=1080&q=85"
    data-isLive="${node?.data?.target?.fields?.isLive}"
    data-src="${node?.data?.target?.fields?.videoUrls?.['application/x-mpegURL']}"></div>`
