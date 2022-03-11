"use strict";

var _video = _interopRequireDefault(require("../video"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('video', function () {
  it('should render video html correctly', function () {
    var video = {
      "data": {
        "url": "https://vod-dev.chdrstatic.com/transcode/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b_2m.m3u8",
        "isLive": false,
        "caption": ""
      },
      "type": "video"
    };
    var videoHtml = (0, _video["default"])(video.data, _config["default"]);
    var expectedHtml = "<div class=\"article-body-video\" data-caption=\"\" data-isLive=\"false\" data-src=\"https://vod-dev.chdrstatic.com/transcode/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b/9d0828eb-7ab2-4998-93f9-e8fe28ae5f9b_2m.m3u8\"></div>";
    expect(videoHtml).toBe(expectedHtml);
  });
});