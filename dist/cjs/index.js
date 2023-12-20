const { sampleFunction } = require('../../src/sampleFunction');

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const One = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h1", null, "One lorem ipsum dolor sit"));
};

const Two = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h2", null, "Two lorem ipsum dolor sit"));
};

const components = {
  One,
  Two
};

exports.sampleFunction = sampleFunction;
exports.One = One;
exports.Two = Two;
exports["default"] = components;
