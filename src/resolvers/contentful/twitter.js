import config from '../../config'

export default (node) => `
  <div class="${config.embed.class} ${config.embed.twitter.class}">
    <blockquote class="${config.tweet.class}">
      <a href="${node.content}"></a>
    </blockquote>
  </div>`
