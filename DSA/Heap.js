class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    const A = this.heap;

    A.push(val);
    let i = A.length - 1;

    while (i > 0 && A[this.parent(i)] > A[i]) {
      [A[this.parent(i)], A[i]] = [A[i], A[this.parent(i)]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.heap;
    const min = A[0];

    A[0] = A.pop();
    let C;

    for (let i = 0; i < A.length; i++) {
      C =
        A[this.child1(i)] < A[this.child1(i)] ? this.child1(i) : this.child2(i);

      if (A[C] < A[i]) {
        [A[C], A[i]] = [A[i], A[C]];
      } else {
        break;
      }
    }
    return min;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  child1(i) {
    return 2 * i + 1;
  }

  child2(i) {
    return 2 * i + 2;
  }
}
