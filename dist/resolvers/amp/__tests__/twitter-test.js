"use strict";

var _twitter = _interopRequireDefault(require("../twitter"));

var _config = _interopRequireDefault(require("../../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('twitter', function () {
  var blocks = {
    "data": {
      "id": "1514330424767655941",
      "url": "https://twitter.com/NYPDnews/status/1514330424767655941",
      "username": "NYPDnews"
    },
    "type": "twitter"
  };
  it('should render the tweet block correctly', function () {
    var tweetHtml = (0, _twitter["default"])(blocks.data, _config["default"]);
    var expectedHtml = '<amp-twitter width=\"375\" height=\"472\" layout=\"responsive\" data-tweetid=\"1514330424767655941\"></amp-twitter>';
    expect(tweetHtml).toBe(expectedHtml);
  });
});