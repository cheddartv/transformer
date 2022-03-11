"use strict";

var _image = _interopRequireDefault(require("../image"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('image', function () {
  it('should render the image block correctly', function () {
    var block = {
      "data": {
        "file": {
          "url": "https://images.ctfassets.net/3kqcuzntcg31/cOpyGRYNloIdLilQw2niR/c18afe600895f0d9cdd7baae1653f21e/a7144bae-12d1-4fcf-bc20-3ff0b9457646.png_width_1200_amp_auto_webp"
        },
        "caption": "Test",
        "stretched": false,
        "withBorder": false,
        "withBackground": false
      },
      "type": "image"
    };
    var imageHtml = (0, _image["default"])(block.data, _config["default"]);
    var expectedHtmlBlock = "<div>\n <img src=\"https://images.ctfassets.net/3kqcuzntcg31/cOpyGRYNloIdLilQw2niR/c18afe600895f0d9cdd7baae1653f21e/a7144bae-12d1-4fcf-bc20-3ff0b9457646.png_width_1200_amp_auto_webp\" alt=\"\"/>\n <em>Test</em>\n</div>\n";
    expect(imageHtml).toBe(expectedHtmlBlock);
  });
});