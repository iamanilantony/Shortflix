const mongoose = require('mongoose')

// change to env variable on deployment
const uri = 'mongodb+srv://anil1234:Nikhil.3134@cluster0.i3r0hej.mongodb.net/shortflix?retryWrites=true&w=majority'

const connectDB = async() => {
    try {
        const con = await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log(`MongoDb connected on port`)
    } catch (error) {
        console.log('Cannot connect db due to'+error);
        process.exit(1);
    }
}
module.exports = connectDB;



