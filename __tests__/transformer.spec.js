import blocks from '../mocks/article.json'

import Transformer from '../transformer'

describe('Transformer', () => {
  it('should parse blocks correctly', () => {
    const transformer = new Transformer()
    const parsedString = transformer.parse(blocks)
    console.log(parsedString)
    //expect(parsedString).toEqual(expectedResult)
  })
})
