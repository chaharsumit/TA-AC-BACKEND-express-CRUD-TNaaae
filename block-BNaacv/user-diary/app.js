let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let userRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : "Database is connected successfully");
})

let app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', "ejs");
app.set('views', path.join(__dirname + '/views'));

app.use('/users', userRouter);

app.listen(4000, () => {
  console.log('server is listening on port:4000');
});