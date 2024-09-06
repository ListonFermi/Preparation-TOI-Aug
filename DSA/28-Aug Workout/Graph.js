class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = new Set();
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
    let visited = {},
      curr;

    while (stack.length) {
      curr = stack.pop();

      if (visited[curr]) continue;

      console.log(curr);
      visited[curr] = true;

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }

  bfs(start) {
    const queue = [start];
    const visited = {};
    let curr;

    while (queue.length) {
      curr = queue.shift();

      if (!visited[curr]) continue;
        
      console.log(curr);
      visited[curr] = true;

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  isCyclic(start) {
    const queue = [[start, null]];
    const visited = {};
    let curr, parent;

    while (queue.length) {
      [curr, parent] = queue.shift();

      if (visited[curr]) return true;
      visited[curr] = true;

      for (let neighbor of this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          queue.push([neighbor, curr]);
        } else if (neighbor != parent) {
          return true;
        }
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.addEdges("A", "B");
graph.addEdges("B", "C");
// graph.addEdges("C", "A");

// graph.addEdges("P", "Q");
// graph.addEdges("Q", "R");
// graph.addEdges("R", "S");
// graph.addEdges("S", "T");

graph.bfs("A");
console.log(graph.isCyclic("A"));
