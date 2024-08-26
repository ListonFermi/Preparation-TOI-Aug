const a = [-10, 8, 2, 20, -2];

function bubbleSort(a) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return a;
}

console.log("Bubble sorted  O(n^2) | O(1) : " + bubbleSort(a));

function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    let NTI = a[i],
      j = i - 1;

    while (j >= 0 && NTI < a[j]) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = NTI;
  }
  return a;
}

console.log("Insertion sorted  O(n^2) | O(1) : " + insertionSort(a));

function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2);
  const leftArr = a.slice(0, m);
  const rightArr = a.slice(m);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log("Merge sorted  O(nlogn) | O(1) : " + mergeSort(a));

function quickSort(a) {
  if (a.length < 2) return a;

  const pivot = a[a.length - 1];
  const leftArr = [],
    rightArr = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) leftArr.push(a[i]);
    else rightArr.push(a[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log("Quick sorted  O(n^2) Avg: O(n*log(n)) | O(n) : " + quickSort(a));