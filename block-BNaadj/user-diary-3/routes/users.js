let express = require('express');
let User = require('../models/User');

let router = express.Router();

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if(err){
      return next(err);
    }
    res.render('users', { users: users });
  })
})

module.exports = router;