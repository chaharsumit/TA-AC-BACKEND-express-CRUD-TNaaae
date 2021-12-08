let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : "DataBase is connected successfully");
})

let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use((req, res, next) => {
  res.locals.message = "hello world";
  next();
});

app.get('/', (req, res) => {
  res.render('index', { user: "Sumit" });
})

app.listen(4000, () => {
  console.log('server is listening on port:4000');
})