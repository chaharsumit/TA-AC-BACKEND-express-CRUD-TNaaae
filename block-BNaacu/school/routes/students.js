let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.render('students', { list: ["ankit", "suraj", "prashant", "ravi"] });
})

router.get('/new', (req, res) => {
  res.send('Students form page');
})

router.post('/', (req, res) => {
  res.send('Student data sent');
})

router.get('/:id', (req, res) => {
  res.render('studentDetail', {student: { name: "rahul", email: "rahul@altcampus.io" }});
})

module.exports = router;