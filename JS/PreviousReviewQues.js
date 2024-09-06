//input: a1b2c3a3
//out: abbcccaaa

function pattern(str) {
  let ans = "";
  let curr, range;

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      curr = str[i];
    } else {
      range = Number(str[i]);
      for (let j = 0; j < range; j++) {
        ans += curr;
      }
    }
  }
  return ans;
}

console.log(pattern("a1b2c3a3"));

// Trie auto complete
// Graph dfs

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

  dfs(start) {
    const stack = [start];
    const visited = {};
    let curr;

    visited[start] = true;

    while (stack.length) {
      curr = stack.pop();
      console.log(curr);

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
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
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  autoComplete(word) {
    let curr = this.root;
    for (let char of word) {
      curr = curr.children[char];
    }
    return this.printAllWords(curr,word);
  }

  printAllWords(curr = this.root, word = "", arr = []) {
    if (curr.endOfWord) {
      arr.push(word);
    }

    for (let child in curr.children) {
      this.printAllWords(curr.children[child], word + child, arr);
    }
    return arr;
  }
}

const trie = new Trie();
trie.insert("Jithin");
trie.insert("Akil");
trie.insert("Akash");
trie.insert("Aravind");
trie.insert("Akil");
trie.insert("Sasi");
console.log(trie);
console.log(trie.printAllWords());
console.log(trie.autoComplete('A'))

