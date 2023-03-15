"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shortcodeParser = _interopRequireDefault(require("../../util/shortcode-parser"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(node) {
  var _node$content, _node$content$;

  var shortcode = (0, _shortcodeParser["default"])(node === null || node === void 0 ? void 0 : (_node$content = node.content) === null || _node$content === void 0 ? void 0 : (_node$content$ = _node$content[0]) === null || _node$content$ === void 0 ? void 0 : _node$content$.value);

  switch (shortcode.name) {
    case 'associated-press':
      return (0, _.associatedPress)(shortcode);

    case 'facebook':
      return (0, _.facebook)(shortcode);

    case 'google-maps':
      return (0, _.googleMaps)(shortcode);

    case 'instagram':
      return (0, _.instagram)(shortcode);

    case 'soundcloud':
      return (0, _.soundcloud)(shortcode);

    case 'spotim':
      return (0, _.spotim)(shortcode);

    case 'spotify':
      return (0, _.spotify)(shortcode);

    case 'tagboard':
      return (0, _.tagboard)(shortcode);

    case 'tiktok':
      return (0, _.tiktok)(shortcode);

    case 'twitter':
      return (0, _.twitter)(shortcode);

    case 'ugc-form':
      return (0, _.form)(shortcode);

    case 'ugc-gallery':
      return (0, _.gallery)(shortcode);

    case 'youtube':
      return (0, _.youtube)(shortcode);

    case 'vimeo':
      return (0, _.vimeo)(shortcode);

    default:
      return '';
  }
};

exports["default"] = _default;