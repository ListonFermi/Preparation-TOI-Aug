/*
class Hello {
  static b = 10;

  constructor() {
    this.a = 11;
  }
}

console.log(Hello.b)
const h= new Hello()
console.log(h.a)
*/
/*
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];
const c = [...a, ...b];
console.log(c);

const str = ["adjfn", "dfd", "dfsd"];
const strU = str.map((v) => v.toUpperCase());
console.log(strU);

const e = [5, 8, 6, 5, 22, 56, 74, 12];

const L = e.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
console.log(L)
*/

/*

const a = 11;

const p = new Promise((resolve, reject) => {
  if (a % 2 != 0) {
    reject("Its odd");
  } else {
    resolve("success it's even");
  }
});

p.then((data) => console.log(data)).catch((err) => console.log(err));
*/

/*
console.log({a})

var a = 10;
let b = 20;
const c = 30;
*/

/*
const a = [10, 55, 78, 10, 25, 65, 25, 10];
const ans = a.filter((v,i) => i == a.indexOf(v));
console.log(ans)
*/

/*

// generator function

function* seq() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const seqInstance = seq();
console.log(seqInstance.next())
console.log(seqInstance.next())
console.log(seqInstance.next())
console.log(seqInstance.next())
*/
/*

function* treeTraversal(node) {
  yield node.value;
  if (node.left) yield* treeTraversal(node.left);
  if (node.right) yield* treeTraversal(node.right);
}

const tree = {
  value: 1,
  left: { value: 2, left: { value: 4 }, right: { value: 5 } },
  right: { value: 3, left: { value: 6 }, right: { value: 7 } },
};

for (let value of treeTraversal(tree)) {
  console.log(value);
}
*/

/*

console.log('a'+5)
console.log('a'-5)
console.log('a'*5)
console.log(5+'a')
console.log(5-'a')
console.log(1+2+'3')
console.log('1'*'2'+3)

*/

/*

const nestedArray = [2, 43, 5, [23, 54, [90, 3]], [1]];

function secondLargest(a, L = -Infinity, SL = L) {
  for (let val of a) {
    if (Array.isArray(val)) {
      [L, SL] = secondLargest(val, L, SL);
    } else {
      if (val > L) {
        SL = L;
        L = val;
      } else if (val > SL && val < L) {
        SL = val;
      }
    }
  }
  return [L, SL];
}

console.log(secondLargest(nestedArray));
*/

/*
All 4 : Takes an iterable of promises as input and returns a single Promise

Promise.all() 

This returned promise fulfills: when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values
This returned promise rejects: when any of the input's promises reject, with this first rejection reason

Promise.allSettled()

This returned promise fulfills: when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

Promise.any()

This returned promise fulfills: when any of the input's promises fulfill, with this first fulfillment value.
This returned promise rejects: when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons

Promise.race()
This returned promise settles with the eventual state of the first promise that settles.

*/

/*

// -find the longest repeating character in “etrrrtutraaaaa” output should be “aaaaa”

function longestRepeating(s) {
  let maxChar = "",
    maxLength = 0;
  let currChar = "",
    currLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (currChar === s[i]) {
      currLength++;
    } else {
      currChar = s[i];
      currLength = 1;
    }

    if (currLength > maxLength) {
      maxChar = currChar;
      maxLength = currLength;
    }
  }
  return maxChar.repeat(maxLength)
}

const str = "etrrrtutraaaaa";
console.log(longestRepeating(str));

*/

/*
-find the longest repeating char in "hghyyydddddddd"
*/

function longestRepeating(str) {
  let maxChar = "",
    currChar;
  for (let char of str) {
    if (char == currChar?.[char.length-1]) {
      currChar += char;
    } else {
      currChar = char;
      currLength = 1;
    }
    maxChar = currChar.length > maxChar.length ? currChar : maxChar;
  }
  return maxChar
}

const str = "hghyyydddddddd";
console.log(longestRepeating(str));
