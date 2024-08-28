class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);

    if (!this.root) return (this.root = node);

    let curr = this.root;

    while (curr) {
      if (val < curr.val) {
        if (!curr.left) return (curr.left = node);
        else curr = curr.left;
      } else {
        if (!curr.right) return (curr.right = node);
        else curr = curr.right;
      }
    }
  }

  getMin(curr = this.root) {
    if (!curr.left) {
      return curr.val;
    } else {
      return this.getMin(curr.left);
    }
  }

  //DFS
  preorder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      this.preorder(curr.left);
      this.preorder(curr.right);
    }
  }

  //BFS
  levelOrder() {
    const queue = [this.root];
    let curr;

    while (queue.length) {
      curr = queue.shift();

      console.log(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
}
