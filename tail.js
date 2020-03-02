const tail = (arr) => {
  tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i])
  }
  return tailArr
}


const assertEqual = function (actual,expected) {

  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log (`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
  }
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3)




