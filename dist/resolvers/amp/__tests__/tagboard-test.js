"use strict";

var _tagboard = _interopRequireDefault(require("../tagboard"));

var _config = _interopRequireDefault(require("../../../config"));

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
    var expectedHtml = "<amp-iframe layout=\"responsive\"\n            width=\"100\"\n            height=\"100\"\n            src=\"https://longisland.news12.curds.io/poll?id=5165\"\n            sandbox=\"allow-scripts allow-same-origin\">\n           <amp-img placeholder\n              src=\"/loading-animation.gif\"\n              height=\"64\"\n              width=\"64\"\n              layout=\"fixed\"></amp-img>\n        </amp-iframe>";
    expect(tagboardHtml).toBe(expectedHtml);
  });
});