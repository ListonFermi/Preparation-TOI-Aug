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

// function hello() {
//   const a = 10;
// }

// const h = new hello();
// console.log(h);

// const user = {
//   name: "John Doe",
//   age: 30,
//   greet() {
//     console.log(`Hi, I'm ${this.name}.`);
//   },
// };

// user.greet();

/*
write a function which will move all the zeros in an array to the right, with minimal time complexity
input = [1,3,0,5,0,5,0]
output= [1,3,5,5,0,0,0]
*/

/*
function moveZeros(a) {
  let nonZeroFromLast = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      [a[i], a[nonZeroFromLast]] = [a[nonZeroFromLast], a[i]];
      nonZeroFromLast++;
    }
  }

  return a;
}

const a = [1, 3, 0, 5, 0, 5, 0];
console.log(moveZeros(a));

// function newFn(a) {
//   let pointer = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != 3) {
//       [a[pointer], a[i]] = [a[i], a[pointer]];
//       pointer++;
//     }
//   }
//   return a
// }

console.log(newFn(a));
*/
/*
const a = [1, 3, 0, 5, 0, 5, 0];
let l = 0,
  r = a.length-1;

while (l < r) {
  if (a[l] == 0 && a[r] != 0) {
    [a[l], a[r]] = [a[r], a[l]];
  }

  if (a[l] != 0) {
    l++;
  }

  if (a[r] == 0) {
    r--;
  }
}

console.log(a);
*/

// const a = ['a',1,,'b']
// console.log(typeof a[2])

// const b= new Array(5)
// console.log(b)

/*
const str = "asvfvdsdfdaasvdjcnkdsk";

function removeRepeating(str) {
  const hashTable = {};
  let ans = "";

  for (let letter of str) {
    if (hashTable[letter]) {
      continue;
    } else {
      ans += letter;
      hashTable[letter] = true;
    }
  }
  return ans;
}

console.log(removeRepeating(str))
*/

/*
(() => {
  console.log("hello");
  (() => {
    console.log("hello");
    console.log(this);
  })();
})();

(function () {
  (function () {
    console.log(this);
  })();
})();
*/

function removeAdjOdd(a) {
  return a.filter((val, ind) => {
    if (ind === 0) {
      return !(val % 2 != 0 && a[ind + 1] % 2 != 0);
    }

    if (ind === a.length - 1) {
      return !(val % 2 != 0 && a[ind - 1] % 2 != 0);
    }

    return !(val % 2 != 0 && (a?.[ind - 1] % 2 != 0 || a?.[ind + 1] % 2 != 0));
  });
}

console.log(removeAdjOdd([1, 2, 3, 4, 5, 6, 7, 3, 8, 9]));
