class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = {};
    }
  }

  addEdges(v1, v2, weight) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjacencyList[v1][v2] = weight;
    this.adjacencyList[v2][v1] = weight;
  }

  bfs(start) {
    const queue = [start];
    const visited = {};
    let curr;

    while (queue.length) {
      curr = queue.shift();

      if (visited[curr]) continue;

      console.log(curr);
      visited[curr] = true;

      for (let neighbor in this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(start) {
    const stack = [start];
    const visited = {};
    let curr;

    while (stack.length) {
      curr = stack.pop();

      if (visited[curr]) continue;

      console.log(curr);
      visited[curr] = true;

      for (let neighbor in this.adjacencyList[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addEdges("A", "B", 1);
graph.addEdges("B", "C", 2);
graph.addEdges("C", "A", 3);

console.log(graph);

graph.bfs("C");