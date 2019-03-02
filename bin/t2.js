#!/usr/bin/env node

const { hello, lorem } = require('yargs').argv;
const { helloWorld, loremIpsum } = require('../src/t1');

const doIt = () => {
  const output = [];

  if (lorem) {
    output.push(loremIpsum('do it'));
  }

  if (hello) {
    output.push(helloWorld(hello));
  }

  console.log(`t1: ${output.join(', ')}`);
};

doIt();
