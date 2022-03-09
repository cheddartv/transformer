const paragraphResolver = require('../paragraph')
const config = require('../../config')

describe('paragraph', () => {
  it('should render the paragraph#1 block correctly', () => {
    const blocks = {
      "data": {
      "text": "<a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey."
    },
      "type": "paragraph"
    }
    const expectedHtml = `<div class=\"block\"> <a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey. </div>`
    const paragraphNode = paragraphResolver(blocks.data, config)
    expect(paragraphNode).toBe(expectedHtml)
  })

  it('should render the paragraph#2 block correctly', () => {
    const blocks =      {
      "data": {
        "text": "<i>View photos below.</i>"
      },
      "type": "paragraph"
    }
    const expectedHtml = `<div class=\"block\"> <i>View photos below.</i> </div>`
    const paragraphNode = paragraphResolver(blocks.data, config)
    expect(paragraphNode).toBe(expectedHtml)
  })

  it('test', () => {
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
    blocks.reduce((previousBlock, block, index) => {
      console.log('Previous value', previousBlock)
      console.log('Current value', block)
      console.log('index', index)
      console.log('arr', arr)

    }, '')
    console.log(blocks)
  })
})
