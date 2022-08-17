const mongoose = require("mongoose");

var movieSchema = {
  movieName: {
    type: String,
    required: true,
    unique: true,
  },
  directedBy: String,
  url: String,
  theme: String,

  user_id: String,
  genre: String,
  status: String, //TO BE UPDATED IN THE CONTROLLER

  crew: {
    director: String,
    Actor: String,
    Producer: String,
    cinematography: String,
    editor: String,
    asst_director: String,
    writer: String,
    others: {
      role: String,
      name: String,
    },
  },
  cast: [String],
  event: String,
  eventName: String,
  date: Date,
  shortListed: Boolean,
  status: String,
  marks: [
    {
      Overall: Number,
      Direction: Number,
      Story: Number,
      Acting: Number,
      Music: Number,
      SFX: Number,
      Camera: Number,
      Production: Number,
      Guest_id: String,
    },
  ],
  status: String,
  startDate: Date,
  maxEntries: Number,
  guests: [{
    type: String,
    validate: {
      validator: () => {
        return !(this.guests.length > 3);
      },
      message: props => `${props.value} exceeds maximum array size (10)!`
    },
  }]
};

var movieDb = mongoose.model("movies", movieSchema);
module.exports = movieDb;
