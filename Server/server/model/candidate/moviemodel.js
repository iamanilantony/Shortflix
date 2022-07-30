const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const connect = async ()=>{
//     try {
//         const con =  await mongoose.connect("mongodb+srv://anil1234:Nikhil.3134@cluster0.i3r0hej.mongodb.net/shortflix?retryWrites=true&w=majority",{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,})
//         console.log("my movie db connected");
//     }
//    catch(error){
//     console.log(error)
//     process.exit(1);
//    }

// } 

var movieschema = new Schema({
    url : String,
    theme : String,
    director : String,
    Actor  : String,
    Producer : String,
    Others : String
});

var moviemodel = mongoose.model("movies",movieschema);
module.exports = moviemodel;