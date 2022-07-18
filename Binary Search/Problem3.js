// Given a sorted array. Find the number of occurance of K.

let arr = [1, 2, 3, 3, 4, 4, 4, 5, 5];
let k = 5;

let first = bsFirst(arr, 0, arr.length-1, k);
let second = bsSecond(arr, 0, arr.length-1, k);

console.log(Math.abs(first - second) + 1);

function bsFirst(arr, start, end, k) {
  let res = -1;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === k) {
      res = mid;
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}

function bsSecond(arr, start, end, k) {
  let res = -1;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === k) {
      res = mid;
      start = mid + 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
}
