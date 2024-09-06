/*

Applications :

Infinite sequences - fibanocci
Async fun
Iterating over large datasets- Traversing data structures
Lazy evaluation- generating values whenever needed
*/

/*

function* fibanocci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibanocci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

function* fetchData() {
  yield fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  );
  yield fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
    res.json()
  );
  yield fetch("https://jsonplaceholder.typicode.com/posts/3").then((res) =>
    res.json()
  );
}

(async function handleData() {
  const gen = fetchData();

  for (let p of gen) {
    const data = await p;
    console.log(data);
  }
})();

*/




