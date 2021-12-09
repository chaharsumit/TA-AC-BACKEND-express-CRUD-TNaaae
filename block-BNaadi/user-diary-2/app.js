let express = require('express');
let mongoose = require('mongoose');
let path = require('path');

let indexRouter = require('./routes/index.js');
let userRouter = require('./routes/users.js');

mongoose.connect('mongodb://localhost/userDiarySecond', (err) => {
  console.log(err ? err : "Database is connected succesfully");
});

let app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  res.send('404 Page Not Found!!');
})

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(3000, () => {
  console.log('server is listening on port:3000');
})