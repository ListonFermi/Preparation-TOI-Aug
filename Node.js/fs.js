const fs = require("fs");

(async function (path) {
  try {
    const data = fs.statSync(path);
    console.log(data);
  } catch (error) {
    console.log("error:" + error.message);
  }
})("out2.txt");
