"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatTime = function formatTime(timeUpdated) {
  var ONE_HOUR = 60;
  var ONE_DAY = 1440;
  var ONE_WEEK = 10080;
  var currentTime = (0, _moment["default"])();

  var duration = _moment["default"].duration(currentTime.diff((0, _moment["default"])(timeUpdated))).asMinutes();

  if (duration < 1) return "Just Now";
  if (duration < ONE_HOUR) return "".concat(Math.round(duration), "m ago");
  if (duration >= ONE_HOUR && duration < ONE_DAY) return "".concat(Math.round(duration / ONE_HOUR), "h ago");
  if (duration >= ONE_DAY && duration < ONE_WEEK) return "".concat(Math.round(duration / ONE_DAY), "d ago");
  return "".concat((0, _moment["default"])(timeUpdated).format('MMM DD, YYYY'));
};

var _default = formatTime;
exports["default"] = _default;