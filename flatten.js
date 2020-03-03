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

const flatten = (arr) => {
  const result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      el.forEach((nestedEl) => {
        result.push(nestedEl);
      });
    } else {
      result.push(el);
    }
  });
  return result;
};

assertEqual(flatten([ 1, 2, 3, [ 4, 5, 6 ], 6, 7 ]), [ 1, 2, 3, 4, 5, 6, 6, 7 ]);
assertEqual(flatten([ 1, 2, 3, [ 4, 5, 6 ], 6, [ 7 ], [ 'a', 'g' ] ]), [ 1, 2, 3, 4, 5, 6, 6, 7, 'a', 'g' ]);
assertEqual(flatten([ 1, 2, 3, [ 4, 5, 6 ], 6, 7 ]), [ 1, 2, 3, 4, 5, 6, 6, 7 ]);
assertEqual(flatten([ 1, 2, 3, [ 4, 5, 6 ], 6, 7 ]), [ 1, 2, 3, 4, 5, 6, 6, 7 ]);
