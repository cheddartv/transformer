"use strict";

var _quote = _interopRequireDefault(require("../quote"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('quote', function () {
  it('should render the quote block correctly', function () {
    var blocks = {
      "data": {
        "text": "Sample Text",
        "caption": "",
        "alignment": "left"
      },
      "type": "quote"
    };
    var quoteHtml = (0, _quote["default"])(blocks.data, _config["default"]);
    expect(quoteHtml).toBe('<blockquote class=\"left\">\n  <p>Sample Text</p>\n  <footer></footer>\n</blockquote>\n');
  });
});