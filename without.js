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

const without = (source, remove) => {
  let result = [];
  source.forEach((el) => {
    if (!remove.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

assertEqual(without([ 1, 2, 3 ], [ 2 ]), [ 1, 3 ]);
assertEqual(without([], [ 2 ]), []);
assertEqual(without([ 1, 2, 3 ], []), [ 1, 2, 3 ]);

const words = [ 'hello', 'world', 'lighthouse' ];
without([ 'hello', 'world', 'lighthouse' ], [ 'lighthouse' ]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertEqual(words, [ 'hello', 'world', 'lighthouse' ]);
