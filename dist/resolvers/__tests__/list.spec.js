"use strict";

var _list = _interopRequireDefault(require("../list"));

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('list', function () {
  it('should render the list block correctly', function () {
    var blocks = {
      "type": "list",
      "data": {
        "style": "unordered",
        "items": ["This is a block-styled editor", "Clean output data", "Simple and powerful API"]
      }
    };
    var expectedHtml = (0, _list["default"])(blocks.data, _config["default"]);
    expect(expectedHtml).toBe("<div class=\"list\"><ul><li>This is a block-styled editor</li><li>Clean output data</li><li>Simple and powerful API</li></ul></div>");
  });
});