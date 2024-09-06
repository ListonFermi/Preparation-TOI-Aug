// create an express route which takes two numbers as
// query parameters and a middleware to double the values and write the sum of two in a file named sum.txt

const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  const { num1, num2 } = req.query;
  const sum = Number(num1) + Number(num2);
  fs.writeFileSync("sum.txt", sum.toString());

  res.send("done");
});

app.listen(5000, () => console.log("Server started"));
