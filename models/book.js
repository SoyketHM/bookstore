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