// Binary search - ho sakta h ki yeh binary search ho
// Find if k is present in the array given. If found print 1 else -1;

// Identification -> sorted array / two pointer approach

// example -> dictionary -> alphabetical order [sorted]

// Array = {10, 20, 30, 40, 50, 60}; --> return true; time complexity -> O(N) - optimize

// k = 40, 30, 20;

// worst case -> k = 60;

// binary search -> 
// Time complexity -> O(logn)
// Space complexity -> O(1) | O(logn)


// Array = {10, 20, 30, 40, 50, 60}


// driver code
let arr = new Array(6);
arr = [1, 2, 3, 4, 5, 6]; // sorted
let k = 1;

console.log(binarySearch(arr, arr.length, k)? "Found": "Not Found");

function binarySearch(arr, n, k) {
    let start = 0;
    let end = n-1;
    let mid;
    while(start <= end) {
        mid = start + Math.floor((end-start)/2); // Math.floor(end/2);
        if(arr[mid] === k) {
            return true;
        } else if(arr[mid] < k) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}


// Dry run