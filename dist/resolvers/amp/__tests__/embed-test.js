"use strict";

var _config = _interopRequireDefault(require("../../../config"));

var _formatString = _interopRequireDefault(require("../../../util/formatString"));

var _embed = _interopRequireDefault(require("../../amp/embed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('embed', function () {
  describe('youtube', function () {
    var youtubeBlock = {
      "data": {
        "embed": "https://www.youtube.com/embed/BDBnm9i_DBE",
        "width": 580,
        "height": 320,
        "source": "https://www.youtube.com/watch?v=BDBnm9i_DBE",
        "caption": "",
        "service": "youtube"
      },
      "type": "embed"
    };
    it('should map youtube node correctly', function () {
      var embedHtml = (0, _embed["default"])(youtubeBlock.data, _config["default"]);
      var expectedHtml = "<amp-iframe\n            layout=\"responsive\"\n            width=\"580\"\n            height=\"320\"\n            src=\"https://www.youtube.com/embed/BDBnm9i_DBE\"\n            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>\n          <em></em>";
      expect((0, _formatString["default"])(embedHtml)).toBe((0, _formatString["default"])(expectedHtml));
    });
  });
  describe('cheddar video', function () {
    var cheddarVideoBlock = {
      "data": {
        "embed": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false",
        "width": 560,
        "height": 315,
        "source": "https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player",
        "caption": "",
        "service": "cheddar"
      },
      "type": "embed"
    };
    it('should map cheddar video node correctly', function () {
      var embedHtml = (0, _embed["default"])(cheddarVideoBlock.data, _config["default"]);
      var expectedHtml = "<amp-iframe\n            layout=\"responsive\"\n            width=\"560\"\n            height=\"315\"\n            src=\"https://cheddar.com/media/apples-new-budget-iphone-will-be-faster-and-more-expensive/player?autoplay=false\"\n            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>\n          <em></em>";
      expect((0, _formatString["default"])(embedHtml)).toBe((0, _formatString["default"])(expectedHtml));
    });
  });
  describe('ugc carousel', function () {
    var ugcCarousel = {
      "data": {
        "embed": "https://ugc.curds.io/carousel/8",
        "source": "https://ugc.curds.io/carousel/8",
        "caption": "",
        "service": "ugc_carousel"
      },
      "type": "embed"
    };
    it('should map carousel node correctly', function () {});
    var expectedHtml = "<amp-iframe\n          layout=\"responsive\"\n          width=\"100\"\n          height=\"100\"\n          class=\"carousel-embed\"\n          src=\"https://ugc.curds.io/carousel/8\"\n          sandbox=\"allow-scripts allow-same-origin\">\n            <amp-img placeholder\n              src=\"/loading-animation.gif\"\n              height=\"64\"\n              width=\"64\"\n              layout=\"fixed\"></amp-img>\n        </amp-iframe>\n        <em></em>";
    var carouselHtml = (0, _embed["default"])(ugcCarousel.data, _config["default"]);
    expect((0, _formatString["default"])(carouselHtml)).toBe((0, _formatString["default"])(expectedHtml));
  });
  describe('ugc form', function () {
    var ugcForm = {
      "data": {
        "embed": "https://ugc.curds.io/formviewer/display/365",
        "source": "https://ugc.curds.io/formviewer/display/365",
        "caption": "",
        "service": "ugc_form"
      },
      "type": "embed"
    };
    it('should map ugc form correctly', function () {
      var expectedHtml = "<amp-iframe\n          layout=\"responsive\"\n          width=\"100\"\n          height=\"100\"\n          class=\"form-embed\"\n          src=\"https://ugc.curds.io/formviewer/display/365\"\n          sandbox=\"allow-scripts allow-same-origin\">\n            <amp-img placeholder\n              src=\"/loading-animation.gif\"\n              height=\"64\"\n              width=\"64\"\n              layout=\"fixed\"></amp-img>\n        </amp-iframe>\n        <em></em>";
      var formHtml = (0, _embed["default"])(ugcForm.data, _config["default"]);
      expect((0, _formatString["default"])(formHtml)).toBe((0, _formatString["default"])(expectedHtml));
    });
  });
  describe('facebook video', function () {
    var facebookVideo = {
      "data": {
        "embed": "https://www.facebook.com/video/embed?video_id=1566308450213846",
        "width": 552,
        "height": 315,
        "source": "https://www.facebook.com/1424858414264105/videos/1566308450213846",
        "caption": "",
        "service": "facebook"
      },
      "type": "embed"
    };
    it('should map facebook video node correctly', function () {
      var expectedHtml = "<amp-iframe\n            layout=\"responsive\"\n            width=\"552\"\n            height=\"315\"\n            src=\"https://www.facebook.com/video/embed?video_id=1566308450213846\"\n            sandbox=\"allow-scripts allow-same-origin\"></amp-iframe>\n          <em></em>";
      var facebookVideoHtml = (0, _embed["default"])(facebookVideo.data, _config["default"]);
      expect((0, _formatString["default"])(facebookVideoHtml)).toBe((0, _formatString["default"])(expectedHtml));
    });
  });
});