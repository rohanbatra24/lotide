const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns true for equal arrays', () => {
    assert.isTrue(eqArrays([ 1, 2, 3 ], [ 1, 2, 3 ]));
  });
  it('returns false for unequal arrays', () => {
    assert.strictEqual(eqArrays([ 1, 2, 3 ], [ 1, 2, 7 ]), false);
  });
  it('returns false for unequal length arrays', () => {
    assert.strictEqual(eqArrays([ 1, 2, 3 ], [ 1, 2, 3, 4 ]), false);
  });
});
