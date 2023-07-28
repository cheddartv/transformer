import config from '../../config'

export default (node) => {
  const embedId = node.content?.match(/.*embed_id=([^&|\n|\t\s]+)/)?.[1] || null
  const accountId = node.content?.match(/-news12-([^\/]+)\/editor\/([^\/]+)/)?.[1] || null

  if (!embedId || !accountId) {
    return ''
  }

  return `<div class='${config.embed.class} ${config.embed.minutely.class}'>
            <div data-embedId='${embedId}' data-accountId='${accountId}'></div>
          </div>`
}
