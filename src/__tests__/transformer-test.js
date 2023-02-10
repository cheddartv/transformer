import fs from 'fs'
import contentfulRteData from '../mocks/contentful-rte.json'
import editorJsData from '../mocks/editor-js.json'
import formatString from '../util/formatString'
import parse from '../transformer'

describe('Transformer', () => {
  describe('when parsing contentfulRteData', () => {
    fit('should parse it correctly', () => {
      const parsedString = parse(contentfulRteData)
      console.log(formatString(parsedString))
      expect(1).toEqual('test')
    })
  })
  it('should parse blocks correctly', () => {
    const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/article.html', 'utf8')
    const parsedString = parse(editorJsData)
    expect(formatString(parsedString)).toEqual(formatString(expectedHtml))
  })

  describe('when AMP parameter is true', () => {
    it('should parse blocks correctly', () => {
      const expectedHtml = fs.readFileSync(__dirname + '/../mocks/html/ampArticle.html', 'utf8')
      const parsedString = parse(editorJsData, true)
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
