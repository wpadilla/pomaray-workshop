var bookController = function(Book) {
    
    var post = function (req, res) {
        var book = new Book(req.body);
        book.save(function(err) {
            if ( err ) 
                res.status(500).send(err);
            else 
                res.json(book);
        });

        console.log(book);
        res.status(201).send(book);
    };

    var get = function (req, res) {
        var query = req.query
        Book.find(query, function (err, books) {
            if (err)
                res.status(500).send(err);
            else {
                res.json(books);
            }
        });

    };

    return {
        get: get,
        post: post
    };
};

module.exports = bookController;