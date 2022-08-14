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
  Actor: String,
  user_id: String,
  genre: String,

  crew: {
    director: String,
    producer: [String],
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
  date: Date,
  shortListed: Boolean,
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
  startDate: Date,
  maxEntries: Number,
};

var movieDb = mongoose.model("movies", movieSchema);
module.exports = movieDb;
