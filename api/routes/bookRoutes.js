var express = require('express');

var bookRoutes = function (Book) {

    bookRouter = express.Router();
    var bookController = require('../controllers/BookController')(Book);

    bookRouter.route('/')
        .post(bookController.post)
        .get(bookController.get);
    // this is a middleware men
    bookRouter.use('/:idBook', function (req, res, next) {
        Book.findById(req.params.idBook, function (err, book) {
            if (err)
                res.status(500).send(err);
            else if (book) {
                req.book = book;
                next();
            } else
                res.status(404).send("NO ecite ece livro bro!")
        });

    });

    bookRouter.route('/:idBook')
        .get(function (req, res) {
            res.status(201).send(req.book);
        })
        .put(function (req, res) {
            var IBook = [
                "title",
                "genre",
                "author",
                "read"
            ]
            for (value of IBook) {
                if (value in req.book)
                    req.book[value] = req.body[value];
            }

            req.book.save(function(err) {
                if ( err ) 
                    res.status(500).send(err);
                else 
                    res.json(req.book);
            });

        })
        .patch(function (req, res) {
            if(req.body._id)
                delete req.body._id;

            for (value in req.body) {
                if (value in req.book)
                    req.book[value] = req.body[value]
            }

            req.book.save(function(err) {
                if ( err ) 
                    res.status(500).send(err);
                else 
                    res.json(req.book);
            });

        })
        .delete(function(req, res) {
            console.log("SDsds");
            req.book.remove(function(err) {
                if(err)
                    res.status(500).send(err)
                else
                    res.status(204).send("Removed");
            })
        });

return bookRouter;
};

module.exports = bookRoutes