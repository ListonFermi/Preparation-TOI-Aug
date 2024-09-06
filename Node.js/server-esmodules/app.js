import fs from "fs";

// const fs2 = require("fs");

fs.writeFileSync("out.txt", "hello");
// fs2.writeFileSync('out2.txt','hello2')

fs.stat("out2.txt", (err, stats) => {
  if (err) return console.log(err.message);

  console.log(stats)

});

// Error first callback

function divideNumbers(a, b, callback) {
    if (b === 0) {
        return callback(new Error('Division by zero'));
    }
    const result = a / b;
    callback(null, result);
}

divideNumbers(10, 2, (err, result) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log('Result:', result);
});