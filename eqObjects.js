// const eqArrays = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
//       return false;
//     }
//   }
//   return true;
// };

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// const cd = { c: '1', d: [ '2', 3 ] };
// const dc = { d: [ '2', 3 ], c: '1' };

// const cd2 = { c: '1', d: [ '2', 3, 4 ] };

// console.log(eqObjects(cd, dc)); // => true
// console.log(eqObjects(cd, cd2)); // => false

// assertEqual(eqObjects(cd, dc));
// assertEqual(eqObjects(cd, cd2));

module.exports = eqObjects;
