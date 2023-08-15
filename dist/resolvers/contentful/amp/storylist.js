"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _formatTime = _interopRequireDefault(require("../../../util/format-time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node, config) {
  var _node$data, _node$data$target, _node$data$target$fie, _node$data2, _node$data2$target, _node$data2$target$fi, _node$data2$target$fi2;

  return "<div class=\"".concat(config.embed.storyList["class"], "\">\n  <p>").concat((node === null || node === void 0 ? void 0 : (_node$data = node.data) === null || _node$data === void 0 ? void 0 : (_node$data$target = _node$data.target) === null || _node$data$target === void 0 ? void 0 : (_node$data$target$fie = _node$data$target.fields) === null || _node$data$target$fie === void 0 ? void 0 : _node$data$target$fie.name) || 'Related Stories', "</p>\n  ").concat(node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$fi = _node$data2$target.fields) === null || _node$data2$target$fi === void 0 ? void 0 : (_node$data2$target$fi2 = _node$data2$target$fi.stories) === null || _node$data2$target$fi2 === void 0 ? void 0 : _node$data2$target$fi2.map(function (story) {
    var _story$fields, _story$fields2, _story$fields3;

    return "<div class=\"story\">\n                          <a className='story' href=".concat(story === null || story === void 0 ? void 0 : (_story$fields = story.fields) === null || _story$fields === void 0 ? void 0 : _story$fields.slug, ">\n                            <span className='timestamp'>{").concat((0, _formatTime["default"])(story === null || story === void 0 ? void 0 : (_story$fields2 = story.fields) === null || _story$fields2 === void 0 ? void 0 : _story$fields2.publishedAt), "}</span>\n                            <p className='title'>").concat(story === null || story === void 0 ? void 0 : (_story$fields3 = story.fields) === null || _story$fields3 === void 0 ? void 0 : _story$fields3.title, "</p>\n                          </a>\n                        </div>");
  }).join(''), "</div>");
};

exports["default"] = _default;