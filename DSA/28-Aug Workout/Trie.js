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
    for (let i = 0; i < word.length; i++) {
      if (!curr.children[word[i]]) {
        curr.children[word[i]] = new TrieNode();
      }
      curr = curr.children[word[i]];
    }
    curr.endOfWord = true;
  }

  printAllWords(curr = this.root, word = "", res = []) {
    if (curr.endOfWord && Object.entries(curr.children).length === 0) {
      return res.push(word);
    } else if (curr.endOfWord) {
      res.push(word);
    }

    for (let child in curr.children) {
      this.printAllWords(curr.children[child], word + child, res);
    }
    return res;
  }
}

const trie = new Trie();
trie.insert("Akil");
trie.insert("Suresh");
trie.insert("Jithin");
trie.insert("Sasi");

console.log(trie.printAllWords());
