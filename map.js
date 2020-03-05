const words = [ 'ground', 'control', 'to', 'major', 'tom' ];
const birds = [ 'hhh', 'ddd', 'ddd', 's', 'tom' ];
const durds = [ '1' ];

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertEqual(map(words, (word) => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertEqual(map(birds, (bird) => bird[0]), []);
assertEqual(map(durds, (durd) => durd[0]), [ 'h', 'h', 'b' ]);
