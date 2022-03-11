"use strict";

var _twitter = _interopRequireDefault(require("../twitter"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('twitter', function () {
  var blocks = {
    "data": {
      "id": "1499379880479363081",
      "url": "https://twitter.com/news12frank/status/1499379880479363081",
      "username": "news12frank"
    },
    "type": "twitter"
  };
  it('should render the tweet block correctly', function () {
    var tweetHtml = (0, _twitter["default"])(blocks.data, _config["default"]);
    var expectedHtml = '<blockquote class=\"twitter-tweet\">\n <a href=\"https://twitter.com/news12frank/status/1499379880479363081\"></a>\n</blockquote>\n';
    expect(tweetHtml).toBe(expectedHtml);
  });
});