"use strict";

var _paragraph = _interopRequireDefault(require("../paragraph"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('paragraph', function () {
  it('should render the paragraph#1 block correctly', function () {
    var blocks = {
      "data": {
        "text": "<a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey."
      },
      "type": "paragraph"
    };
    var expectedHtml = "<div class=\"block\"> <a href=\"https://newjersey.news12.com/guide-st-patricks-day-parades-in-new-jersey\">CLICK HERE</a> to see a schedule of parades across New Jersey. </div>";
    var paragraphNode = (0, _paragraph["default"])(blocks.data, _config["default"]);
    expect(paragraphNode).toBe(expectedHtml);
  });
  it('should render the paragraph#2 block correctly', function () {
    var blocks = {
      "data": {
        "text": "<i>View photos below.</i>"
      },
      "type": "paragraph"
    };
    var expectedHtml = "<div class=\"block\"> <i>View photos below.</i> </div>";
    var paragraphNode = (0, _paragraph["default"])(blocks.data, _config["default"]);
    expect(paragraphNode).toBe(expectedHtml);
  });
});