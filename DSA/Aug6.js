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

  bfs(start) {
    const queue = [start];
    const visited = {};
    let curr;

    visited[start] = true;

    while (queue.length) {
      curr = queue.shift();
      console.log(curr);

      for (let neighbor of this.adjacencyList[curr]) {
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
    let curr;

    visited[start] = true;

    while (stack.length) {
      curr = stack.pop();
      console.log(curr);

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
  }
}

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
    let curr = node;

    if (!this.root) {
      this.root = node;
      return;
    }

    while (curr) {
      if (curr.val < val) {
        if (!curr.left) {
          curr.left = node;
          return;
        } else {
          curr = curr.left;
        }
      } else {
        if (!curr.right) {
          curr.right = node;
          return;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  //DFS
  preOrder(curr = this.root) {
    if (curr) {
      console.log(curr.val);
      this.preOrder(curr.left);
      this.preOrder(curr.right);
    }
  }

  //BFS
  levelOrder() {
    if (!this.root) return null;
    const queue = [this.root];
    let curr;

    while (queue.length) {
      curr = queue.shift();
      console.log(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(right);
      }
    }
  }

  heightOfBST(curr = this.root) {
    if (!curr) {
      return -1;
    }

    const leftHt = this.heightOfBST(curr.left);
    const rightHt = this.heightOfBST(curr.right);

    return Math.max(leftHt, rightHt) + 1;
  }
}

const tree = new BST()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.insert(60)

tree.preOrder()





