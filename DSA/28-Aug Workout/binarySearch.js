function binarySearchIterative(a, t) {
  let l = 0,
    r = a.length - 1,
    m;

  while (l <= r) {
    m = Math.floor((l + r) / 2);

    if (t === a[m]) {
      return m;
    } else if (t < a[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
}

function binarySearchRecursive(a, t, l = 0, r = a.length - 1) {
  if (l > r) return -1;

  let m = Math.floor((l + r) / 2);

  if (t === a[m]) {
    return m;
  } else if (t < a[m]) {
    return binarySearchRecursive(a, t, l, m - 1);
  } else {
    return binarySearchRecursive(a, t, m + 1, r);
  }
}

const a = [5, 10, 15, 20, 25, 30, 35, 40, 45];
console.log(binarySearchIterative(a, 25));
console.log(binarySearchRecursive(a, 25));
