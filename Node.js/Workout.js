console.log("Hello => number 1");

setTimeout(() => {
  console.log("set timeout ");
}, 0);

setImmediate(() => {
  console.log("set immediate ");
});

process.nextTick(() => {
  console.log("next tick ");
});

// const dns= require('node:dns')

// dns.lookup('example.org', (err, address, family) => {
//     console.log({address,family})
//     console.log('address: %j family: IPv%s', address, family);
//   });

const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href#examples"
);
console.log(url); // '#examples'
