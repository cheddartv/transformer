"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var embedId = node.content.match(/.*embed_id=([^&|\n|\t\s]+)/) || null;
  var accountId = node.content.match(/-news12-([^\/]+)\/editor\/([^\/]+)/) || null;

  if (!embedId || !accountId) {
    return '';
  }

  return "<div class='".concat(_config["default"].embed["class"], " ").concat(_config["default"].embed.minutely["class"], "'>\n            <div data-embedId='").concat(embedId, "' data-accountId='").concat(accountId, "'></div>\n          </div>");
};

exports["default"] = _default;