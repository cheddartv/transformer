import blockMap from './parser.js'
import config from './config.js'

class Transformer {
  parse(blocks) {
    return blocks.reduce((parsedString, block) => {
      const resolver = blockMap.get(block.type)
      if(resolver) {
        return parsedString + resolver(block.data, config)
      }
      return parsedString
    }, '')
  }
}

export const { parse } = new Transformer()
