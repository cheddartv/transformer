const spotimResolver = require('../spotim')
const config = require('../../config')

describe('spotim', () => {
  const block = {
    "data": {
      "id": "25T13WruHHcEbnYguV4PTTQTa0d",
      "org_id": "sp_jdoMBksO"
    },
    "type": "spotim"
  }

  it('should render the spotim block correctly', () => {
    const spotimHtml = spotimResolver(block.data, config)
    const expectedHtml = '<script src=\"https://launcher.spot.im/spot/sp_jdoMBksO\" data-spotim-module=\"spotim-launcher\" data-live-blog=\"true\"\n    data-live-event-code=\"25T13WruHHcEbnYguV4PTTQTa0d\" data-enable-live-blog-replies=\"false\"></script>'
    expect(spotimHtml).toBe(expectedHtml)
  })
})
