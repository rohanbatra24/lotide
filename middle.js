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

const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2);
  let result = [];
  if (arr.length <= 2) return result;
  else if (arr.length % 2 !== 0) {
    result.push(arr[middleIndex]);
  } else {
    result.push(arr[middleIndex] - 1);
    result.push(arr[middleIndex]);
  }
  return result;
};

module.exports = middle;
