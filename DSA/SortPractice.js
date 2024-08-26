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

function quickSort(a) {
  if (a.length < 2) return a;

  const pivot = a[a.length - 1],
    leftArr = [],
    rightArr = [];

  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] < pivot) {
      leftArr.push(a[i]);
    } else {
      rightArr.push(a[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log("Quick sorted  O(n^2) Avg: O(n*log(n)) | O(n) : " + quickSort(a));