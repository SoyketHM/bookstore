const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');

// connect to mongoose
mongoose.connect('mongodb://root:root123@ds213472.mlab.com:13472/bookstore', { useNewUrlParser: true });
const db = mongoose.connection;

app.get('/', (req,res)=> {
    res.send('sdsghtjusetuer');
});

// show genres
app.get('/api/genres', (req,res)=>{
    Genre.getGenre((err, genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

// add genres
app.post('/api/genres', (req,res)=>{
    let genre =  req.body;
    Genre.addGenre(genre, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// update genres
app.put('/api/genres/:_id', (req,res)=>{
    let id = req.params._id;
    let genre =  req.body;
    Genre.updateGenre(id,genre,{}, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// show books
app.get('/api/books', (req,res)=>{
    Book.getBook((err, books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    });
});

// show book by id
app.get('/api/books/:_id', (req,res)=>{
    Book.getBookById(req.params._id, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});

// add book
app.post('/api/books', (req,res)=>{
    let book =  req.body;
    Book.addBook(book, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});


app.listen(3000, () => console.log("server start on port 3000..."));




