const tail = require('../tail');
const assert = require('chai').assert;

const words = [ 'Yo Yo', 'Lighthouse', 'Labs' ];

const result = tail(words);

// assertEqual(words.length, 3);
// assertEqual(result[0], 'Lighthouse');

describe('#tail', () => {
  it('returns Lighthouse for first element of result', () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it('returns 3 for length of result', () => {
    assert.strictEqual(words.length, 3);
  });
});
