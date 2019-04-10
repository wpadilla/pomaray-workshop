var express = require("express"),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect("mongodb://localhost/bookAPI", {useNewUrlParser: true});

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get("/", function (req, res) {
    res.send("Dile algo api: -api: 'hola mundo!'");
});

app.listen(port, function () {
    console.log("Estoy corriendo en el puerto: " + port);
});