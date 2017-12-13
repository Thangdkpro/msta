const User = require('../user/user.model');
const Book = require('./book.model');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');


const mongoose = require('mongoose')
    

exports.getBooks = function(req, res) {
  Book.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};




exports.postBook = function(req, res) {
  const new_book = new Book(req.body);
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.getBookById = function(req, res) {
  Book.findOne(req.params.bookId).exec(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.editBook = function(req, res) {
  Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, 
    function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};


exports.deleteBook = function(req, res) {


  Book.remove({
    _id: req.params.bookId
  }, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};
