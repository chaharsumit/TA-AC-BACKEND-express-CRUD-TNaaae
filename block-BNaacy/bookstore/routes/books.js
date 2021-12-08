let express = require('express');
let router = express.Router();
let Book = require('../models/book');

router.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    if(err){
      return next(err);
    } 
    res.render('books', { books: books });
  });
})

router.get('/new', (req, res) => {
  res.render('addBook');
});

router.post('/', (req, res, next) => {
  Book.create(req.body, (err, createdBook) => {
    if(err){
      return next(err);
    }
    res.redirect('/books');
  })
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  Book.findById(id, (err, book) => {
    if(err){
      return next(err);
    }
    res.render('bookDetails', { book: book });
  });
})

module.exports = router;