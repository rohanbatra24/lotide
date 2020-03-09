const middle = function(arr) {
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) return [];
  else if (arr.length % 2 !== 0) {
    return arr[middleIndex];
  } else {
    return [ arr[middleIndex - 1], arr[middleIndex] ];
  }
};

module.exports = middle;
