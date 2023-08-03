"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _he = require("he");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fixInstagramScriptSrc = function fixInstagramScriptSrc(html) {
  return html.replace('<script async src="//www.instagram.com/embed.js"></script>', '<script async src="https://www.instagram.com/embed.js"></script>');
};

var embed = function embed(node) {
  var _node$data, _node$data$target, _node$data$target$fie;

  if (node !== null && node !== void 0 && (_node$data = node.data) !== null && _node$data !== void 0 && (_node$data$target = _node$data.target) !== null && _node$data$target !== void 0 && (_node$data$target$fie = _node$data$target.fields) !== null && _node$data$target$fie !== void 0 && _node$data$target$fie.code.startsWith('<blockquote class="instagram-media"')) {
    var _node$data2, _node$data2$target, _node$data2$target$fi;

    return "<div class='".concat(_config["default"].embed.instagram["class"], "' \n                 data-embed='").concat((0, _he.encode)(fixInstagramScriptSrc(node === null || node === void 0 ? void 0 : (_node$data2 = node.data) === null || _node$data2 === void 0 ? void 0 : (_node$data2$target = _node$data2.target) === null || _node$data2$target === void 0 ? void 0 : (_node$data2$target$fi = _node$data2$target.fields) === null || _node$data2$target$fi === void 0 ? void 0 : _node$data2$target$fi.code)), "'></div>");
  } else {
    var _node$data3, _node$data3$target, _node$data3$target$fi;

    return "<div class='".concat(_config["default"].embed["class"], "'><div>").concat(node === null || node === void 0 ? void 0 : (_node$data3 = node.data) === null || _node$data3 === void 0 ? void 0 : (_node$data3$target = _node$data3.target) === null || _node$data3$target === void 0 ? void 0 : (_node$data3$target$fi = _node$data3$target.fields) === null || _node$data3$target$fi === void 0 ? void 0 : _node$data3$target$fi.code, "</div></div>");
  }
};

var list = function list(node) {
  var _node$data4, _node$data4$target, _node$data4$target$fi, _node$data4$target$fi2;

  var body = "<div class='storyList'>".concat(node === null || node === void 0 ? void 0 : (_node$data4 = node.data) === null || _node$data4 === void 0 ? void 0 : (_node$data4$target = _node$data4.target) === null || _node$data4$target === void 0 ? void 0 : (_node$data4$target$fi = _node$data4$target.fields) === null || _node$data4$target$fi === void 0 ? void 0 : (_node$data4$target$fi2 = _node$data4$target$fi.stories) === null || _node$data4$target$fi2 === void 0 ? void 0 : _node$data4$target$fi2.map(function (story) {
    var _story$fields, _story$fields2, _story$fields3;

    return "<div class='story' data-title='".concat(story === null || story === void 0 ? void 0 : (_story$fields = story.fields) === null || _story$fields === void 0 ? void 0 : _story$fields.title, "'\n                     data-slug='").concat(story === null || story === void 0 ? void 0 : (_story$fields2 = story.fields) === null || _story$fields2 === void 0 ? void 0 : _story$fields2.slug, "' data-thumb='").concat(story === null || story === void 0 ? void 0 : (_story$fields3 = story.fields) === null || _story$fields3 === void 0 ? void 0 : _story$fields3.thumbnail, "'></div>");
  }), "</div>");
  return body.join('');
};

var _default = function _default(node) {
  var _node$data5, _node$data5$target, _node$data5$target$sy, _node$data5$target$sy2, _node$data5$target$sy3;

  var type = node === null || node === void 0 ? void 0 : (_node$data5 = node.data) === null || _node$data5 === void 0 ? void 0 : (_node$data5$target = _node$data5.target) === null || _node$data5$target === void 0 ? void 0 : (_node$data5$target$sy = _node$data5$target.sys) === null || _node$data5$target$sy === void 0 ? void 0 : (_node$data5$target$sy2 = _node$data5$target$sy.contentType) === null || _node$data5$target$sy2 === void 0 ? void 0 : (_node$data5$target$sy3 = _node$data5$target$sy2.sys) === null || _node$data5$target$sy3 === void 0 ? void 0 : _node$data5$target$sy3.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    case 'embed':
      return embed(node);

    case 'list':
      return list(node);

    default:
      return '';
  }
};

exports["default"] = _default;