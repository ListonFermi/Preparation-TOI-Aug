const fs = require("fs");

let i = 0;
const timerId = setInterval(() => {
  fs.appendFileSync("hello.txt", new Date().toISOString() + "\n");
  i++;
  if (i == 10) {
    clearInterval(timerId);
  }
}, 1000);
