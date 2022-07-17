// Given a sorted array, where you need to find K. If found return 1 else return -1.
// *note: You don't know the order in which the array is sorted. Ascending / Descending

// driver code
let arr = new Array(6);
arr = [6, 5, 4, 3, 2, 1]; // sorted
let k = -4;

let res;
if (arr[0] < arr[1]) {
  res = bsAscendingOrder(arr, arr.length, k);
} else {
  res = bsDescendingOrder(arr, arr.length, k);
}

console.log(res);

function bsAscendingOrder(arr, n, k) {
  let start = 0;
  let end = n - 1;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2); // Math.floor(end/2);
    if (arr[mid] === k) {
      return true;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

function bsDescendingOrder(arr, n, k) {
  let start = 0;
  let end = n - 1;
  let mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2); // Math.floor(end/2);
    if (arr[mid] === k) {
      return true;
    } else if (arr[mid] < k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
