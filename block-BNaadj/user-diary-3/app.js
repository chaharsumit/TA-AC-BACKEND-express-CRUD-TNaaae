let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/userDiaryThird', (err) => {
  console.log(err ? err : "Database is connected successfully");
});

let app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.send('404 Page Not Found!!');
});

app.use((err, res, req, next) => {
  res.send(err);
})

app.listen(3000, () => {
  console.log('server is listening on port:3000');
})