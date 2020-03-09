const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let letter of sentence) {
    if (results[letter] === ' ') continue;
    else if (results[letter]) {
      results[letter].push(sentence.indexOf(letter, results[letter].slice(-1).pop() + 1));
    } else {
      results[letter] = [];
      results[letter].push(sentence.indexOf(letter));
    }
  }

  delete results[' '];

  return results;
};

console.log(letterPositions('Lighthouse in the house'));

assertArraysEqual(letterPositions('Lighthouseinthehouse').e, [ 9, 14, 19 ]);

module.exports = letterPositions;
