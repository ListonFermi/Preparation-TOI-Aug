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
    let curr

    const queue = [this.root.val];

    while(queue.length){
        curr = queue.shift()

        console.log(curr.val)
        queue.push(curr.left)
        queue.push(curr.right)
    }
  }

  
}
