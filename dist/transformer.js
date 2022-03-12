"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parser = _interopRequireDefault(require("./parser.js"));

var _config = _interopRequireDefault(require("./config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Transformer = /*#__PURE__*/function () {
  function Transformer() {
    _classCallCheck(this, Transformer);
  }

  _createClass(Transformer, [{
    key: "parse",
    value: function parse(blocks) {
      if (!blocks || !Array.isArray(blocks)) {
        return '';
      }

      return blocks.reduce(function (parsedString, block) {
        var resolver = _parser["default"].get(block.type);

        if (resolver) {
          return parsedString + resolver(block.data, _config["default"]);
        }

        return parsedString;
      }, '');
    }
  }]);

  return Transformer;
}();

var _Transformer = new Transformer(),
    parse = _Transformer.parse;

var _default = parse;
exports["default"] = _default;