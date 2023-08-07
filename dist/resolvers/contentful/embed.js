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

  return "<div class='storyList'>".concat(node === null || node === void 0 ? void 0 : (_node$data4 = node.data) === null || _node$data4 === void 0 ? void 0 : (_node$data4$target = _node$data4.target) === null || _node$data4$target === void 0 ? void 0 : (_node$data4$target$fi = _node$data4$target.fields) === null || _node$data4$target$fi === void 0 ? void 0 : (_node$data4$target$fi2 = _node$data4$target$fi.stories) === null || _node$data4$target$fi2 === void 0 ? void 0 : _node$data4$target$fi2.map(function (story) {
    var _story$fields, _story$fields2, _story$fields3, _story$fields3$thumbn, _story$fields3$thumbn2, _story$fields3$thumbn3, _story$fields4, _story$fields4$videoU, _story$fields4$videoU2, _story$fields5, _story$fields5$videoU, _story$fields5$videoU2, _story$fields6, _story$fields7, _story$fields7$videoF, _story$fields8, _story$fields8$videoU;

    return "<div class='story' data-title='".concat(story === null || story === void 0 ? void 0 : (_story$fields = story.fields) === null || _story$fields === void 0 ? void 0 : _story$fields.title, "'\n                     data-slug='").concat(story === null || story === void 0 ? void 0 : (_story$fields2 = story.fields) === null || _story$fields2 === void 0 ? void 0 : _story$fields2.slug, "' \n                     data-thumb='").concat(story === null || story === void 0 ? void 0 : (_story$fields3 = story.fields) === null || _story$fields3 === void 0 ? void 0 : (_story$fields3$thumbn = _story$fields3.thumbnail) === null || _story$fields3$thumbn === void 0 ? void 0 : (_story$fields3$thumbn2 = _story$fields3$thumbn.fields) === null || _story$fields3$thumbn2 === void 0 ? void 0 : (_story$fields3$thumbn3 = _story$fields3$thumbn2.file) === null || _story$fields3$thumbn3 === void 0 ? void 0 : _story$fields3$thumbn3.url, "' \n                     data-mp4='").concat(story === null || story === void 0 ? void 0 : (_story$fields4 = story.fields) === null || _story$fields4 === void 0 ? void 0 : (_story$fields4$videoU = _story$fields4.videoUrls) === null || _story$fields4$videoU === void 0 ? void 0 : (_story$fields4$videoU2 = _story$fields4$videoU.fields) === null || _story$fields4$videoU2 === void 0 ? void 0 : _story$fields4$videoU2['video/mp4'], "'\n                     data-mpeg='").concat(story === null || story === void 0 ? void 0 : (_story$fields5 = story.fields) === null || _story$fields5 === void 0 ? void 0 : (_story$fields5$videoU = _story$fields5.videoUrls) === null || _story$fields5$videoU === void 0 ? void 0 : (_story$fields5$videoU2 = _story$fields5$videoU.fields) === null || _story$fields5$videoU2 === void 0 ? void 0 : _story$fields5$videoU2['application/x-mpegURL'], "'\n                     data-published='").concat(story === null || story === void 0 ? void 0 : (_story$fields6 = story.fields) === null || _story$fields6 === void 0 ? void 0 : _story$fields6.publishedAt, "'\n                     data-duration='").concat(story === null || story === void 0 ? void 0 : (_story$fields7 = story.fields) === null || _story$fields7 === void 0 ? void 0 : (_story$fields7$videoF = _story$fields7.videoFile) === null || _story$fields7$videoF === void 0 ? void 0 : _story$fields7$videoF.duration, "'>\n                     poster='").concat(story === null || story === void 0 ? void 0 : (_story$fields8 = story.fields) === null || _story$fields8 === void 0 ? void 0 : (_story$fields8$videoU = _story$fields8.videoUrls) === null || _story$fields8$videoU === void 0 ? void 0 : _story$fields8$videoU['image/jpeg'], "'</div>");
  }).join(''), "</div>");
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