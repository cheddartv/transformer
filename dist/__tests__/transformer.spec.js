"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _article = _interopRequireDefault(require("../mocks/article.json"));

var _formatString = _interopRequireDefault(require("../util/formatString"));

var _transformer = _interopRequireDefault(require("../transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Transformer', function () {
  it('should parse blocks correctly', function () {
    var expectedHtml = _fs["default"].readFileSync(__dirname + '/../mocks/html/article.html', 'utf8');

    var transformer = new _transformer["default"]();
    var parsedString = transformer.parse(_article["default"]);
    expect((0, _formatString["default"])(parsedString)).toEqual((0, _formatString["default"])(expectedHtml));
  });
});