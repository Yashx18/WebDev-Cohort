const { timeStamp } = require("console");
const express = require("express");
const app = express();
app.use(express.json());

function middlewareFn(req, res, next) {
  console.log(`Method used is ${req.method}`);
  console.log(`URL used is ${req.hostname}`);
  const time = Date.now();
  console.log(time);

  next();
}

app.post("/add", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    msg: a + b,
  });
});

app.use(middlewareFn);

// app.get("/add/:num1/:num2", middlewareFn, function (req, res) {
//   const a = parseInt(req.params.num1);
//   const b = parseInt(req.params.num2);
//   res.json({
//     msg: a + b,
//   });
// });

// app.get("/multiply/:num1/:num2", function (req, res) {
//   const a = parseInt(req.params.num1);
//   const b = parseInt(req.params.num2);
//   res.json({
//     msg: a * b,
//   });
// });
// app.get("/divide/:num1/:num2", function (req, res) {
//   const a = parseInt(req.params.num1);
//   const b = parseInt(req.params.num2);
//   res.json({
//     msg: a / b,
//   });
// });
// app.get("/subract/:num1/:num2", function (req, res) {
//   const a = parseInt(req.params.num1);
//   const b = parseInt(req.params.num2);
//   res.json({
//     msg: a - b,
//   });
// });

app.listen(3000, () => {
  console.log(`Server running on 'http://localhost:3000/add'`);
});
