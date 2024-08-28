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

/*

// const k = 10;

let y = 20;

if (true) {
    // let y = 30; // Legal shadowing, different block
    var y = 30;   // Illegal shadowing in strict mode or block-scoped context
}

*/

/*

function isPrime(n) {
  let i
  for ( i = 2; i <= n; i++) {
    if (n % i == 0) {
      break;
    }
  }
  return n === i;
}

console.log(isPrime(49))

*/

// const obj = {name: 'dhoni', age: 43}

// function Cls(){
//   this.name = 'Dhoni'
//   this.age = 43
// }

// Cls.prototype.phone= 9553492955

// const obj = new Cls()
// console.log(obj.phone)

function hello() {
  const a = 10;
}

const h = new hello();
console.log(h);

const user = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}.`);
  },
};

user.greet();