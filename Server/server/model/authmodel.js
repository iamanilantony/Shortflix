const mongoose = require('mongoose');

var authschema = {
    name : String,
    books : String,
    Age : Number,
    img : String,
    desc : String,
}

var AuthorSchema = mongoose.model('author',authschema)

module.exports = AuthorSchema;