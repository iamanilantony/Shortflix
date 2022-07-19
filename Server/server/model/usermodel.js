const mongoose = require('mongoose')

const userSchema = {
    email : {
        type: String,
        required : true,
        unique : true
    },
    name : String,
    password : String,
    role : String
} 

const userDb = mongoose.model('users',userSchema);

module.exports = userDb;


