"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$content, _node$content$match, _node$content2, _node$content2$match;

  var embedId = ((_node$content = node.content) === null || _node$content === void 0 ? void 0 : (_node$content$match = _node$content.match(/.*embed_id=([^&|\n|\t\s]+)/)) === null || _node$content$match === void 0 ? void 0 : _node$content$match[1]) || null;
  var accountId = ((_node$content2 = node.content) === null || _node$content2 === void 0 ? void 0 : (_node$content2$match = _node$content2.match(/-news12-([^\/]+)\/editor\/([^\/]+)/)) === null || _node$content2$match === void 0 ? void 0 : _node$content2$match[1]) || null;

  if (!embedId || !accountId) {
    return '';
  }

  return "<div class='".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.minutely["class"], "'>\n            <div data-embedId='").concat(embedId, "' data-accountId='").concat(accountId, "'></div>\n          </div>");
};

exports["default"] = _default;