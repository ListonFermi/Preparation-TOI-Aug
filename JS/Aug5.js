/*

TRIE:

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

    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  printAllWords(curr = this.root, word = "", res = []) {
    if (curr.endOfWord) {
      res.push(word);
    }

    for (let child in curr.children) {
      this.printAllWords(curr.children[child], word + child, res);
    }
    return res;
  }

  autoComplete(word) {
    let curr = this.root;

    for (let char of word) {
      if (!curr.children[char]) {
        return "No words found";
      }
      curr = curr.children[char];
    }
    return this.printAllWords(curr, word);
  }

  longestCommonPrefix() {
    let curr = this.root;
    let commonPrefix = "";
    let child;

    while (Object.keys(curr.children).length === 1) {
      child = Object.keys(curr.children)[0];
      commonPrefix += child;
      curr = curr.children[child];
    }
    return commonPrefix
  }
}

const trie = new Trie();
trie.insert("Jithin");
trie.insert("Sanooj");
trie.insert("Sasi");
trie.insert("Akil");
trie.insert("Akash");
trie.insert("Aravind");

console.log(trie.printAllWords());
console.log(trie.autoComplete("J"));

const trieCommonPrefix = new Trie()
trieCommonPrefix.insert('Abcdejih')
trieCommonPrefix.insert('Abcdefgi')
trieCommonPrefix.insert('Abcdefgj')
console.log(trieCommonPrefix.longestCommonPrefix())

*/

// HEAP

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    const A = this.heap;
    A.push(val);

    let i = A.length - 1;

    while (i >= 0 && A[this.parent(i)] > A[i]) {
      [A[this.parent(i)], A[i]] = [A[i], A[this.parent(i)]];
      i = this.parent(i);
    }
  }

  extractMin() {
    const A = this.heap;
    const min = A[0];
    let C;

    A[0] = A.pop();

    for (let i = 0; i < A.length; i++) {
      C =
        A[this.child1(i)] < A[this.child2(i)] ? this.child1(i) : this.child2(i);

      if (A[i] > A[C]) {
        [A[i], A[C]] = [A[C], A[i]];
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

const heap = new MinHeap();
heap.insert(50);
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(4);
console.log(heap.extractMin())