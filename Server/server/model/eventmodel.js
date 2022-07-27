const mongoose = require('mongoose');

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
}

var eventDb = mongoose.model('events',eventSchema);
module.exports = eventDb;