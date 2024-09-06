/*
// Days Until Christmas


function daysUntilChristmas() {
  const today = Date.now();
  const christmas = new Date("2024-12-25").getTime();

  return Math.round((christmas - today) / (1000 * 60 * 60 * 24));
}

console.log(daysUntilChristmas());

// Destructuring Nested Property

const person = {
  name: "Dhoni",
  age: 43,
  cities: { born: "Ranchi", current: "Chennai" },
};

const {
  name,
  age,
  cities: { born, current },
} = person;

console.log({ name, age, born, current });

// Largest Digit in Number

// function largestDigit(num) {
//   let L = -Infinity;

//   num = num.toString();

//   for (let i = 0; i < num.length; i++) {
//     L = Math.max(L, Number(num[i]));
//   }
//   return L
// }

function largestDigit(num) {
  let L = -Infinity;
  while (num > 0) {
    L = num % 10 > L ? num % 10 : L;
    num = Math.floor(num / 10);
  }
  return L
}

const num = 549655612;
console.log(largestDigit(num))

*/

/*

Input: "The prices are $100, €50.50, and £30.99. Don't forget about ¥200.";

Expected output : [
  { currency: '$', amount: 100 },
  { currency: '€', amount: 50.50 },
  { currency: '£', amount: 30.99 }
]

*/

// const inputString = "The prices are $100, €50.50, and £30.99. Don't forget about ¥200.";

// function extractCurrency(str){

// }

const a = [124, 0, 2, 5, 1, 0, 1, 4, 5, 0, 5, 8, 9, 0, 8];

let l = 0,
  r = a.length - 1;

while (l < r) {
  if (a[l] == 0 && a[r] != 0) {
    [a[l], a[r]] = [a[r], a[l]];
  }

  if (a[l] != 0) l++;
  if (a[r] == 0) r--;
}

console.log(a);

const today = new Date();
console.log(`${today.getDay() + 2}/${today.getMonth()+1}/${today.getFullYear()}`);
