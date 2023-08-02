"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var document = function document(nodeList) {
  var _nodeList$content;

  console.log('content', nodeList === null || nodeList === void 0 ? void 0 : nodeList.content);
  return nodeList === null || nodeList === void 0 ? void 0 : (_nodeList$content = nodeList.content) === null || _nodeList$content === void 0 ? void 0 : _nodeList$content.map(function (node) {
    return parse(node);
  });
};

var _default = document;
exports["default"] = _default;