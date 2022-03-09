import blockMap from './parser'
import config from './config'

class Transformer {
  parse(blocks) {
    //for each block, I ll have a seperate string
    return blocks.reduce((renderableString, block) => {
      const resolver = blockMap.get(block.type)
      return renderableString + resolver(block.data, config)
    }, '')
  }
}

let blocks = [
  {
    "data": {
      "text": "Regardless of the car you drive, there are tricks you can use that will help you save gas. "
    },
    "type": "paragraph"
  },
  {
    "data": {
      "text": "According to State Farm, good driving habits contribute to better fuel economy, which saves money and helps the planet, too."
    },
    "type": "paragraph"
  }
]

const transformer = new Transformer()
const parsedString = transformer.parse(blocks)
console.log(parsedString)
