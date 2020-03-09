const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  let noSpaces = string.replace(/ /g, '');

  console.log(noSpaces);

  const results = {};

  for (let letter of noSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else results[letter] = 1;
  }

  return results;
};

const result1 = countLetters('Lighthouse in the house');

// assertEqual(result1['h'], 4);
// assertEqual(result1['L'], 1);
// assertEqual(result1['s'], 2);

module.exports = countLetters;
