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

assertEqual([ 1, 2, 3 ], [ 1, 2, 3 ]);
assertEqual([ 1, 2, 3 ], [ 1, 2, 7 ]);
assertEqual([ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ]);
