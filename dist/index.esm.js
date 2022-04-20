import React from 'react';

const One = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "One lorem ipsum dolor sit"));
};

const Two = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Two lorem ipsum dolor sit"));
};

const components = {
  One,
  Two
};

export { One, Two, components as default };
