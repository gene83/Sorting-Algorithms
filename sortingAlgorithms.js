const testArray = [3, 7, 5, 2, 8, 1, 4, 9, 6];

/* quick sort
 * while the array length is greator than 1 (sorted)
 * choose a pivot point
 * compare the rest of the array to the pivot
 * sort values lower to the left and higher to the right
 * run on left and right sides
 */

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.pop();
  const left = [];
  const right = [];

  while (arr.length) {
    if (arr[0] < pivot) {
      left.push(arr.shift());
    } else {
      right.push(arr.shift());
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

/* merge sort
 * while array length is greator than 1 (sorted)
 * split the array into two halves
 * run on each half until arrays are length 1
 * on the way up:
 * merge the halves by putting the lower value in first
 */

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  if (left[0] < right[0]) {
    result.push(left.shift());
  } else {
    result.push(right.shift());
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

/* insertion sort
 * loop through the array
 * for each value:
 * compare to each previous value
 * if current value is lower, insert at that index
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr.splice(i, 1);
        arr.splice(j, 0, temp[0]);
      }
    }
  }
  return arr;
}

/* selection sort
 * loop through array to find the smallest value
 * sort that value to the left
 * repeat on unsorted part:
 * swapping min into the sorted part
 */

function selectionSort(arr) {
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}
