const sessions = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(sessions)
const uri = 'mongodb+srv://anil1234:Nikhil.3134@cluster0.i3r0hej.mongodb.net/shortflix?retryWrites=true&w=majority'

const sessionstore = new MongoDBSession({
    uri: uri,
    collection: 'sessions'
})

module.exports = sessionstore;
