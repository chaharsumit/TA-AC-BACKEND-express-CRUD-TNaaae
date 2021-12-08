const { render } = require('ejs');
let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.render('users', { list: ["sumit", "singh", "chahar"] });
});

router.get('/new', (req, res) => {
  res.render('userForm');
})

router.get('/:id', (req, res) => {
  res.render('singleUser', { name: "Sumit", age: 22 });
})

router.get('/:id/edit', (req, res) => {
  //render the updation form
})

router.post('/', (req, res) => {
  res.send(req.body);
})

router.delete('/:id', (req, res) => {
  //find in req.params the passed username or id, etc and delete
})

router.put('/:id', (req, res) => {
  //find by id and update the user
})

module.exports = router;