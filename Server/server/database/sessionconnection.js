const sessions = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(sessions)
const uri = 'mongodb://localhost:27017/library'

const sessionstore = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
})

module.exports = sessionstore;



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.i3r0hej.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });