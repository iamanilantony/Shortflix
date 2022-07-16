const mongoose = require('mongoose')

// const uri = 'mongodb://localhost:27017/library'

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI,{
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