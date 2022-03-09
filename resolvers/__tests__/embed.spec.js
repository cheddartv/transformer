//Lets do the embed block at the last
describe('embed', () => {
  describe('youtube', () => {
    const youtubeBlock = {
      "data": {
        "embed": "https://www.youtube.com/embed/BDBnm9i_DBE",
        "width": 580,
        "height": 320,
        "source": "https://www.youtube.com/watch?v=BDBnm9i_DBE",
        "caption": "",
        "service": "youtube"
      },
      "type": "embed"
    }

    it('should render the embed block correctly', () => {
      console.log(youtubeBlock)
    })
  })

  describe('cheddar video', () => {
    const cheddarVideoBlock = {
      "data": {
        "embed": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false",
        "width": 560,
        "height": 315,
        "source": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player",
        "caption": "",
        "service": "cheddar"
      },
      "type": "embed"
    }
  })

  describe('ugc carousel', () => {
    const ugcCarousel = {
      "data": {
        "embed": "https://ugc.curds.io/carousel/8",
        "source": "https://ugc.curds.io/carousel/8",
        "caption": "",
        "service": "ugc_carousel"
      },
      "type": "embed"
    }
    console.log(ugcCarousel)
  })

  describe('ugc form', () => {
    const ugcForm = {
      "data": {
        "embed": "https://ugc.curds.io/formviewer/display/365",
        "source": "https://ugc.curds.io/formviewer/display/365",
        "caption": "",
        "service": "ugc_form"
      },
      "type": "embed"
    }

    console.log(ugcForm)
  })
})
