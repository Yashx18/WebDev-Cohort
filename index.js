const express = require("express");
const app = express();
app.use(express.json());

app.get("/add/:num1/:num2", function (req, res) {
  const a = parseInt(req.params.num1);
  const b = parseInt(req.params.num2);
  res.json({
    msg: a + b,
  });
});
app.get("/multiply/:num1/:num2", function (req, res) {
  const a = parseInt(req.params.num1);
  const b = parseInt(req.params.num2);
  res.json({
    msg: a * b,
  });
});
app.get("/divide/:num1/:num2", function (req, res) {
  const a = parseInt(req.params.num1);
  const b = parseInt(req.params.num2);
  res.json({
    msg: a / b,
  });
});
app.get("/subract/:num1/:num2", function (req, res) {
  const a = parseInt(req.params.num1);
  const b = parseInt(req.params.num2);
  res.json({
    msg: a - b,
  });
});

app.listen(3000, () => {
  console.log(`Server running on 'http://localhost:3000/add'`);
});
