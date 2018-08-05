const mongoose = require('mongoose');

//genre schema
let genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now()
    }
});

let Genre = module.exports = mongoose.model('Genre', genreSchema);

//get genre
module.exports.getGenre = (callback, limit)=>{
    Genre.find(callback).limit(limit);
}
//add genre
module.exports.addGenre = (genre, callback)=>{
    Genre.create(genre, callback);
}
//update genre
module.exports.updateGenre = (id, genre,options,callback)=>{
    let query = {_id: id};
    let update = {
        name : genre.name
    };
    Genre.findOneAndUpdate(query,update, options, callback);
}