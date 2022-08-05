const mongoose = require('mongoose');
const movieDb = require('./moviemodel');


var eventSchema = {
    eventName : {
        type: String,
        required : true,
        unique : true
    },
    hostedBy : String,
    // movies : [movieDb],

    sumbmissions : Number,
    dueDate : Date,
    startDate : Date,
    maxEntries : Number,
    open : Boolean,
    desc : String,
}

var eventDb = mongoose.model('events',eventSchema);
module.exports = eventDb;