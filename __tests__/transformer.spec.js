import fs from 'fs'

import blocks from '../mocks/article.json'
import formatString from '../util/formatString'

import Transformer from '../transformer'

describe('Transformer', () => {
  it('should parse blocks correctly', () => {
    const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/article.html', 'utf8')
    const transformer = new Transformer()
    const parsedString = transformer.parse(blocks)
    expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
  })
})
