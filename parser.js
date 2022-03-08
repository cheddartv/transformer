import { listResolver, paragraphResolver, headerResolver, imageResolver } from './resolvers'
import {  embedResolver, twitterResolver, quoteResolver, spotimResolver } from './resolvers'
import blockTypes from './block-types'

const blockMap = new Map()

blockMap.set(blockTypes.PARAGRAPH, paragraphResolver) //Done
blockMap.set(blockTypes.HEADER, headerResolver) //Done
blockMap.set(blockTypes.LIST, listResolver) //Done
blockMap.set(blockTypes.IMAGE, imageResolver) //Done
blockMap.set(blockTypes.EMBED, embedResolver) //In progress
blockMap.set(blockTypes.TWITTER, twitterResolver) //Done
blockMap.set(blockTypes.QUOTE, quoteResolver) //Done
blockMap.set(blockTypes.SPOT_IM, spotimResolver) //Done

// TODO: Video node in the body

export default blockMap
