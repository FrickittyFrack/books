const db = require("../models");

// Defining methods for the booksController
module.exports = {

    // Get all books
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    // Get a specific book
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    // Add a new book
    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    // Update a book
    update: function(req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    // Delete a book
    remove: function(req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
};
