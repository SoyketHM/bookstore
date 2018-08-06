const mongoose = require('mongoose');

//book schema
let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    page: {
        type: String
    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now()
    }
});

let Book = module.exports = mongoose.model('Book', bookSchema);

//get book
module.exports.getBook = (callback, limit)=>{
    Book.find(callback).limit(limit);
}

//get book by id
module.exports.getBookById = (id, callback)=>{
    Book.findById(id,callback);
}
//add book
module.exports.addBook = (book, callback)=>{
    Book.create(book, callback);
}
//update book
module.exports.updateBook = (id, book,options,callback)=>{
    let query = {_id: id};
    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        page: book.page,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query,update, options, callback);
}
//delete book
module.exports.deleteBook = (id, callback)=>{
    let query = {_id: id};
    Book.remove(query, callback);
}

