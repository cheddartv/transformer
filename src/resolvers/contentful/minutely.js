import config from '../../config'

export default (node) => {
  const embedId = node.content.match(/.*embed_id=([^&|\n|\t\s]+)/) || null
  const accountId = node.content.match(/-news12-([^\/]+)\/editor\/([^\/]+)/) || null

  if (!embedId || !accountId) {
    return ''
  }

  return `<div class='${config.embed.class} ${config.embed.minutely.class}'>
            <div data-embedId='${embedId}' data-accountId='${accountId}'></div>
          </div>`
}
