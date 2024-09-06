const a = [-10, 8, 2, 20, -2];

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
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      leftArr.push(a[i]);
    } else {
      rightArr.push(a[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log("Quick sorted  O(nlogn) | O(1) : " + quickSort(a));
