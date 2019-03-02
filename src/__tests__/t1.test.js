const assert = require('assert');
const { helloWorld, loremIpsum } = require('../t1');

describe('HelloWorld', () => {
  it('should render a hello world string ', () => {
    assert.strictEqual(helloWorld('test'), 'Hello world! How are test');
  });
});
