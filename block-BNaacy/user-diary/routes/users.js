let express = require('express');
let User = require('../models/user');
let router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
})

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    if(err){
      res.redirect('/users/new');
    }
    res.redirect('/users');
  })
})

module.exports = router;