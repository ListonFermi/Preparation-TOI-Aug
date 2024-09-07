/*
function changeProperty(obj) {
  obj.name = "Changed";
}

let myObj = { name: "Original" };
changeProperty(myObj);
console.log(myObj.name); // Output: "Changed"

function changeArray(a){
    a[0]='changed'
}

let a=['original']
changeArray(a)
console.log(a[0])
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    const A = this.heap;
    A.push(val);

    let i = A.length - 1;
    while (i >= 0 && A[this.parent(i)] > A[i]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.heap;
    const min = A[0];
    A[0] = A.pop();
    let C;

    //bubbling down
    for (let i = 0; i < this.heap.length; i++) {
      C =
        A[this.child1(i)] > A[this.child2(i)] ? this.child1(i) : this.child2(i);
      if (A[i] > A[C]) {
        [A[i], A[C]] = [A[C], A[i]];
      } else {
        break;
      }
    }
    return min;
  }

  heapSort() {
    const arr = [];
    while (this.heap.length) {
      arr.push(this.extractMin());
    }
    return arr;
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

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return;
    }

    let curr = this.root;

    while (curr) {
      if (val < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = node;
          return;
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.left = node;
          return;
        }
      }
    }
  }

  //bfs- levelorder
  levelOrder() {
    const queue = [this.root];
    let curr;

    while (queue.length) {
      curr = queue.shift();

      console.log(curr.val);
      queue.push(curr.left);
      queue.push(curr.right);
    }
  }

  preorder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      this.preorder(curr.left);
      this.preorder(curr.right);
    }
  }

  getMin(curr = this.root) {
    if (curr.left) {
      return this.getMin(curr.left);
    } else {
      return curr.val;
    }
  }
}

function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2);
  const leftArr = a.slice(0, m);
  const rigtArr = a.slice(m);

  return merge(mergeSort(leftArr), mergeSort(rigtArr));
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

const a = [8, 20, -10, 2, -2, 5];
console.log(mergeSort(a));

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = new Set();
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  //bfs
  bfs(start) {
    const queue = [start];
    const visited = {};
    let curr;

    visited[queue] = true;

    while (queue.length) {
      curr = queue.shift();

      if (visited[curr]) continue;
      console.log(curr);

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
}

// -rotate matrix clockwise const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//     ];
//     Output should be [
//     [4, 1, 2],
//     [7, 5, 3],
//     [8, 9, 6]
//     ];

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateClockwise(matrix) {
  
}

const rotatedMatrix = rotateClockwise(array2D);
console.log(rotatedMatrix);

console.log(this)

console.log(object)