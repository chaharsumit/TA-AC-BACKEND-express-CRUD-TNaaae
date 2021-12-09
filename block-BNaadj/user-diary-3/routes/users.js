let express = require('express');
let User = require('../models/User');

let router = express.Router();

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if(err){
      return next(err);
    }
    res.render('users', { users: users });
  })
})

router.get('/new', (req, res) => {
  res.render('createUser');
})

router.post('/', (req, res, next) => {
  User.create(req.body, (err, createdUser) => {
    if(err){
      return next(err);
    }
    let id = createdUser.id;
    res.redirect('/users/' + id);
  });
})

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if(err){
      return next(err);
    }
    res.render('userDetails', { user: user });
  })
})

router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err){
      return next(err);
    }
    res.render('editForm', { user: user });
  });
})

router.post('/:id/edit', (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if(err){
      return next(err);
    }
    res.redirect('/users/' + id);
  });
})

router.get('/:id/delete', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if(err){
      return next(err);
    }
    res.redirect('/users');
  })
})

module.exports = router;