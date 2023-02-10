import config from '../../config'

export default (node) => `<blockquote class="${config.tweet.class}"><a href="${node.content}"></a></blockquote>`
