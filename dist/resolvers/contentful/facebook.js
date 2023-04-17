"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.urlType = urlType;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function postId(url) {
  var regex = /facebook.com\/([^/]+)\/posts\/([^/]+)/;
  var matches = url.match(regex);
  return matches ? "https://www.facebook.com/".concat(matches[1], "/posts/").concat(matches[2]) : null;
}

function videoId(url) {
  var regex = /facebook.com\/watch\/\?v=([^/]+)/;
  var matches = url.match(regex);
  return matches ? "https://www.facebook.com/facebook/videos/".concat(matches[1]) : null;
}

function urlType(url) {
  if (postId(url)) {
    return {
      type: 'post',
      url: postId(url)
    };
  } else if (videoId(url)) {
    return {
      type: 'video',
      url: videoId(url)
    };
  } else {
    return {
      type: 'unknown',
      url: null
    };
  }
}

var _default = function _default(node) {
  var _urlType = urlType(node === null || node === void 0 ? void 0 : node.content),
      type = _urlType.type,
      url = _urlType.url;

  if (type === 'unknown') {
    return '';
  } else {
    return "\n      <div class=\"".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.facebook["class"], "\">\n        <div class=\"fb-").concat(type, "\" data-href=\"").concat(url, "\" data-width=\"500\"></div>\n      </div>");
  }
};

exports["default"] = _default;