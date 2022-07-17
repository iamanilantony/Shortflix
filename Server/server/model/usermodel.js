const mongoose = require('mongoose');

let userschema = {
    name : String,
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password : String,
    admin : Boolean
}

const userdb = mongoose.model('users',userschema);

module.exports = userdb;