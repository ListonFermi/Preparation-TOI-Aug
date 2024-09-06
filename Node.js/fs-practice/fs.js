const fs = require("fs");

fs.mkdir("New Folder", {}, function (error) {
  if (error) {
    return console.log(error);
  }
});

fs.rmdirSync("New Folder");

const res = fs.existsSync("file1.txt");
console.log(res);
