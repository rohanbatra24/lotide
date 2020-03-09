const tail = (arr) => {
  tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

console.log(tail([ 1, 2, 3 ]));

module.exports = tail;
