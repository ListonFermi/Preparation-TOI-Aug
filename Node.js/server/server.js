const express = require("express");
const app = express();

app.get("/", (req, res) => console.log(req.ip));

app.listen(5000);