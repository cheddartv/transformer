"use strict";

var _config = _interopRequireDefault(require("../../config"));

var _formatString = _interopRequireDefault(require("../../util/formatString"));

var _spotim = _interopRequireDefault(require("../spotim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('spotim', function () {
  var block = {
    "data": {
      "id": "25T13WruHHcEbnYguV4PTTQTa0d",
      "org_id": "sp_jdoMBksO"
    },
    "type": "spotim"
  };
  it('should render the spotim block correctly', function () {
    var spotimHtml = (0, _spotim["default"])(block.data, _config["default"]);
    var expectedHtml = "\n      <script src=\"https://launcher.spot.im/spot/sp_jdoMBksO\" data-spotim-module=\"spotim-launcher\" \n        data-live-blog=\"true\"\n    data-live-event-code=\"25T13WruHHcEbnYguV4PTTQTa0d\" \n        data-enable-live-blog-replies=\"false\"></script>";
    expect((0, _formatString["default"])(spotimHtml)).toBe((0, _formatString["default"])(expectedHtml));
  });
});