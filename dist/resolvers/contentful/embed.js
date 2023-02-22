"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ = require(".");

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var embed = function embed(node) {
  return "<div class=\"".concat(_config["default"].embed["class"], "\"><div>").concat(node.data.target.fields.code, "</div></div>");
};

var _default = function _default(node, next) {
  var type = node.data.target.sys.contentType.sys.id;

  switch (type) {
    case 'videoFile':
      return (0, _.video)(node);

    case 'embed':
      return embed(node);

    default:
      return '';
  }
};

exports["default"] = _default;