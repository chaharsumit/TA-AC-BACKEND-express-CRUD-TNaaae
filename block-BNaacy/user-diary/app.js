let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/samplediary', (err) => {
  console.log(err ? err : "database is connected");
})

let app = express();


app.use("view engine", "ejs");
app.use("views", path.join(__dirname + '/views'));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.send('404 Page Not Found!!');
})

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(3000, () => {
  console.log('server is listening on port:3000');
})