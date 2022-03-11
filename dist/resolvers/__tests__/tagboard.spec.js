"use strict";

var _tagboard = _interopRequireDefault(require("../tagboard"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('tagboard', function () {
  var block = {
    "data": {
      "id": "5165"
    },
    "type": "tagboard"
  };
  it('should render tagboard correctly', function () {
    var tagboardHtml = (0, _tagboard["default"])(block.data, _config["default"]);
    var expectedHtml = "<div class=\"tagboard-embed\" tgb-embed-id=\"5165\"></div>";
    expect(tagboardHtml).toBe(expectedHtml);
  });
});