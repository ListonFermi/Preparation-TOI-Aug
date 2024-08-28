class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Operations : insert, DFS- preorder, postorder, inorder, BFS- level order, getMin: rec & iterative, height of tree : rec & iterative

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    let curr = this.root;

    if (!this.root) return (this.root = node);

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
    if (!this.root) return null;
    let curr;

    const queue = [this.root];

    while (queue.length) {
      curr = queue.shift();

      console.log(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  height(curr = this.root) {
    if (!curr) return -1;

    const leftHt = this.height(curr.left);
    const rigthHt = this.height(curr.right);

    return Math.max(leftHt, rigthHt) + 1;
  }

  height(curr = this.root) {
    if (!curr) return -1;

    const leftHt = this.height(curr.left);
    const rightHt = this.height(curr.right);

    return Math.max(leftHt, rightHt) + 1;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Preorder DFS:");
bst.preorder();

// console.log("Inorder DFS:");
// bst.inorder();

// console.log("Postorder DFS:");
// bst.postorder();

console.log("Level Order BFS:");
bst.levelOrder();

// console.log("Minimum Value (Recursive):", bst.getMinRecursive());
// console.log("Minimum Value (Iterative):", bst.getMinIterative());

// console.log("Height of Tree (Recursive):", bst.heightRecursive());
// console.log("Height of Tree (Iterative):", bst.heightIterative());

console.log(bst.height());
