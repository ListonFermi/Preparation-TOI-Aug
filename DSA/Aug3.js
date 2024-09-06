const a = [-10, 8, 2, 20, -2];

function mergeSort(a) {
  if (a.length < 2) return a;

  const m = Math.floor(a.length / 2),
    leftArr = a.slice(0, m),
    rightArr = a.slice(m);

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
  return [...leftArr, pivot, ...rightArr];
}

console.log("Quick sorted  O(n^2) Avg: O(n*log(n)) | O(n) : " + quickSort(a));

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(val) {
    const node = new Node(val);
    if (this.head) {
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size++;
  }

  append(val) {
    const node = new Node(val);
    if (this.tail) {
      node.prev = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
  }

  removeMid() {
    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast?.next?.next;
      prev = slow;
      slow = slow.next;
    }
    if (prev) {
      prev.next = slow.next;
    }
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;

    for (let letter of word) {
      if (!curr.children[letter]) {
        curr.children[letter] = new TrieNode();
      }
      curr = curr.children[letter];
    }
    curr.endOfWord = true;
  }

  printAllWords() {
    let curr = this.root;
    let stack = [this.root];
    let word = "";
    let ans = [];

    while (stack.length) {
      curr = stack.pop();
      for (let child in curr.children) {
        stack.push(curr.children[curr]);
        word += child;
        if (curr.children[child].endOfWord) {
          ans.push(word);
        }
      }
    }
    return ans;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList[v1].add(v2);
    this.adjacencyList[v2].add(v1);
  }

  bfs(start) {
    const queue = [start];
    const visited = {};
    visited[start] = true;

    while (queue.length) {
      const curr = queue.shift();

      console.log(curr);

      for (let neighbor of this.adjacencyList[curr] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(start) {
    const stack = [start];
    const visited = {};
    visited[start] = true;

    while (stack.length) {
      const curr = stack.pop();

      console.log(curr);

      for (let neighbor of this.adjacencyList[curr] || []) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
  }
}
