const head = (arr) => {
  return arr[0]
}

console.log (head([2,4,1,3]))






const assertEqual = function (actual,expected) {

  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
  }

  assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helloy");
  
  