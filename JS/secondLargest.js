function secondLargest(a) {
  let L = -Infinity,
    SL = L;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > L) {
      SL = L;
      L = a[i];
    } else if (a[i] > SL && a[i] < L) {
      SL = a[i];
    }
  }
  return SL;
}

const a = [20, 2, -2, 10, -10];
console.log(secondLargest(a));
