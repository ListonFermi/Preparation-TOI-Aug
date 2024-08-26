/*
const a = [
  ["Name", "Riyas"],
  ["age", 20],
];
const b = {};
for (let [key, value] of a) {
  // b[val[0]] = val[1];
  Object.defineProperty(b, key, {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}
console.log(b);

console.log(Object.getOwnPropertyDescriptors(b));

const c = { name: "Akil", age: 24 };
const d = Object.assign(c,{age:25})
// const e = { ...c, phone: 5555, age:25}
console.log(d)
*/

const k = 10;