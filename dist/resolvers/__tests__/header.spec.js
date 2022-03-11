"use strict";

var _header = _interopRequireDefault(require("../header.js"));

var _config = _interopRequireDefault(require("../../config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('header', function () {
  var block = {
    "data": {
      "text": "WHAT ELSE IS HAPPENING ON THE GROUND:",
      "level": 2
    },
    "type": "header"
  };
  it('should render the header block correctly', function () {
    var headerNode = (0, _header["default"])(block.data, _config["default"]);
    var expectedHtml = "<h2>WHAT ELSE IS HAPPENING ON THE GROUND:</h2>";
    expect(headerNode).toBe(expectedHtml);
  });
});