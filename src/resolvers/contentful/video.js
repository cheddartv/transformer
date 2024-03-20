import config from '../../config'


const FALLBACK_IMAGE_URL =
  '//images-cf.news12static.com/3kqcuzntcg31/3npmffTlb8qXpqzrYLWXTq/c59543c81cc66265ca2bf4ebb4c7edb8/News12_1920x1080_v2.jpg'

export default (node) =>
  `<div
    class="${config.video.class}"
    data-poster="https:${node?.data?.target?.fields?.thumbnail?.fields?.file?.url ?? FALLBACK_IMAGE_URL}?fit=fill&w=1920&h=1080&q=85"
    data-isLive="${node?.data?.target?.fields?.isLive}"
    data-src="${node?.data?.target?.fields?.videoUrls?.['application/x-mpegURL']}"></div>`
