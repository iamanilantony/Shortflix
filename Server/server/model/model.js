const mongoose = require('mongoose');

var schema = {
    title: {
        type: String,
        unique: true,
        required: true,
    },
    author: String,
    img: String,
    desc: String,
    about: String,
}

var LibrarySchema = mongoose.model('library',schema);

module.exports = LibrarySchema;
