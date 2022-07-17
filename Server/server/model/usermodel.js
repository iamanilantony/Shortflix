const mongoose = require('mongoose')

const userSchema = {
    email : {
        type: String,
        required : true,
        unique : true
    },
    Name : String,
    password : String,
    role : String
} 

const userDb = mongoose.model('shortFlix',userSchema);

module.exports = userDb;


