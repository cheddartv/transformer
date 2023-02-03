import fs from 'fs'

import blocks from '../mocks/article.json'
import formatString from '../util/formatString'

import parse from '../transformer'

describe('Transformer', () => {
  it('should parse blocks correctly', () => {
    const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/article.html', 'utf8')
    const parsedString = parse(blocks)
    expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
  })

  describe('when AMP parameter is true', () => {
    it('should parse blocks correctly', () => {
      const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/ampArticle.html', 'utf8')
      const parsedString = parse(blocks, true)
      expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
    })
  })

  describe('when data has nodeType property', () => {
    it('returns an empty string', () => {
      const blocks = [{ nodeType: 'text' }]
      expect(parse(blocks)).toEqual('')
    })
  })

  describe('validation', () => {
    describe('when blocks array is empty', () => {
      it('should return empty string', () => {
        const blocks = []
        expect(parse(blocks)).toEqual('')
      })
    })

    describe('when blocks is not an array', () => {
      it('should return empty string', () => {
        const blocks = 'string'
        expect(parse(blocks)).toEqual('')
      })
    })

    describe('when blocks array is wrong format', () => {
      it('should return empty string', () => {
        const blocks = [[123], { test: 'test' }]
        expect(parse(blocks)).toEqual('')
      })
    })

    describe('when blocks array does not have expected type', () => {
      it('should return empty string', () => {
        const blocks = [{ wrongTypeName: 'test' }]
        expect(parse(blocks)).toEqual('')
      })
    })
  })
})
