import { listResolver, paragraphResolver, headerResolver, imageResolver } from './resolvers'
import {  embedResolver, twitterResolver, quoteResolver } from './resolvers'
import blockTypes from './block-types'

const blockMap = new Map()

blockMap.set(blockTypes.PARAGRAPH, paragraphResolver)
blockMap.set(blockTypes.HEADER, headerResolver)
blockMap.set(blockTypes.LIST, listResolver)
blockMap.set(blockTypes.IMAGE, imageResolver)
blockMap.set(blockTypes.EMBED, embedResolver)
blockMap.set(blockTypes.TWITTER, twitterResolver)
blockMap.set(blockTypes.QUOTE, quoteResolver)

export default blockMap
