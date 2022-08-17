const eventdb = require("../model/eventmodel");
const movieDb = require("../model/moviemodel");
const userDb = require("../model/usermodel");
const jwt = require("jsonwebtoken");
const axios = require("axios");

exports.addevent = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  if (!req.body) {
    res.status(400).send(`Cannot Insert Empty value ${req.body}`);
    return;
  }
  console.log(req.body);

  var event = new eventdb({
    eventName: req.body.eventName,
    hostedBy: req.body.hostedBy,
    sumbmissions: 0,
    dueDate: req.body.dueDate,
    startDate: req.body.startDate,
    maxEntries: req.body.maxEntries,
    about: req.body.about,
  });

  event
    .save()
    .then((data) => {
      res.status(200).send(data);
      // res.redirect('/')
    })
    .catch((e) => {
      res.send("Error updating" + e);
    });
};
exports.updateevent = (req, res) => {
  if (Object.entries(req.body).length === 0) {
    res.status(500).send(req.body);
    return;
  }
  var id = req.params.id;
  eventdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send("Event Does not exist");
        return;
      } else {
        console.log(data);
        console.log(req.body);
        res.status(200).send(data);
        return;
      }
    })
    .catch((err) => {
      res.status(400).send({ message: "No such user" });
      return;
    });
};

exports.findevent = (req, res) => {
  if (req.params.id) {
    const vid = req.params.id;
    eventdb
      .findById(vid)
      .then((data) => {
        if (!data) {
          res.status(400).send("Id not found");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.send(err + vid);
        // res.send('Error finding unique Id')
      });
  } else {
    eventdb
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send("Error findng all data", err);
      });
  }
};

exports.deleteevent = (req, res) => {
  var id = req.params.id;
  eventdb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(300).send("User Does not exist");
        return;
      }
      res.status(200).send("data got deleted successfully");
    })
    .catch((err) => {
      res.status(400).send({ message: "No such user" });
    });
};

exports.deleteGuest = (req, res) => {
  console.log(req.body);
  var id = req.params.id;
  movieDb
    .findByIdAndUpdate(id, {$set: { guests: req.body }})
    .then((data) => {
      if (!data) {
        res.send("User Does not exist");
        return;
      }
      res.status(200).send("data got deleted successfully");
    })
    .catch((err) => {
      res.status(400).send({ message: "No such user" });
    });
};

exports.addmovie = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send(`Cannot Insert Empty value ${req.query}`);
    return;
  }
  let movie = new movieDb({
    url: req.body.url,
    movieName: req.body.movieName,
    directedBy: req.body.directedBy,
    crew: req.body.crew,
    cast: req.body.cast,
    event: req.body.event,
    date: req.body.date,
    shortListed: req.body.shortListed,
    marks: req.body.marks,
    startDate: req.body.startDate,
    maxEntries: req.body.maxEntries,
    user_id: req.body.user_id,
    genre: req.body.genre,
    theme: req.body.theme,
    eventName: req.body.eventName,
    status: req.body.status,
  });

  movie
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send("Error Adding data to db");
    });
};

exports.updatemovie = (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send(`Cannot update Empty value ${req.query.data}`);
    return;
  }
  let id = req.params.id;
  movieDb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(300).send("Id not found " + data);
        return;
      } else {
        console.log(data);
        res.status(200).send("Data updated succesfuly" + data);
        return;
      }
    })
    .catch((err) => {
      res.status(301).send("Could not update data" + err);
      return;
    });
};
exports.updateMarks = (req, res) => {
  let id = req.params.id;
  movieDb
    .findByIdAndUpdate(id, { $push: { marks: req.body } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      console.log("Could not update data", e);
    });
};
exports.updateGuests = (req, res) => {
  let id = req.params.id;
  movieDb
    .findByIdAndUpdate(id, { $push: { guests: req.body.guest_id } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((e) => {
      console.log("Could not update data", e);
    });
};
exports.deletemovie = (req, res) => {
  let id = req.params.id;
  movieDb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.send("Id not found");
        return;
      } else {
        res.status(200).send("data deleted" + data);
        // next()
      }
    })
    .catch((err) => {
      res.send("Error deleting data" + err);
    });
};
exports.findmovie = (req, res) => {
  if (req.params.id) {
    let id = req.params.id;
    movieDb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.send("Id not found");
          return;
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.send("Error fetching single user data" + err);
        return;
      });
  } else {
    movieDb
      .find()
      .then((data) => {
        res.status(200).send(data);
        return;
      })
      .catch((err) => {
        res.send("Error fetching data" + err);
        return;
      });
  }
};
exports.findEventMovies = (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.status(400).send("Empty Data cannot be searched");
    return;
  } else {
    movieDb
      .aggregate([{ $match: { event: id } }])
      .then((response) => {
        res.status(200).send(response);
        return;
      })
      .catch((e) => {
        res.status(200).send("Error finding users movie from db", e);
        return;
      });
  }
};
exports.findGuests = (req,res) => {
    userDb
      .aggregate([{ $match: { role: "guest" } }])
      .then((response) => {
        res.status(200).send(response);
        return;
      })
      .catch((e) => {
        res.status(400).send("Error finding guest movie from db", e);
        return;
      });
  }

exports.findUsersMovies = (req, res) => {
  let id = req.params.id;
  if (!id) {
    res.status(400).send("Empty Data cannot be searched");
    return;
  } else {
    movieDb
      .aggregate([{ $match: { user_id: id } }])
      .then((response) => {
        res.status(200).send(response);
        return;
      })
      .catch((e) => {
        res.status(200).send("Error finding users movie from db", e);
        return;
      });
  }
};
exports.adduser = (req, res) => {
  if (!req.body) {
    res.send("Empty data cannot be inserted");
    return;
  }
  let user = new userDb({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });
  user
    .save()
    .then((response) => {
      res.status(200).send(response);
      return;
    })
    .catch((err) => {
      res.send("Could not upload user" + err);
      return;
    });
};
exports.finduser = (req, res) => {
  if (!req.params.id) {
    userDb
      .find()
      .then((response) => {
        res.status(200).send(response);
        return;
      })
      .catch((err) => {
        res.send("Could not fetch full user data " + err);
        return;
      });
  } else {
    var id = req.params.id;
    userDb
      .findOne({ _id: `${id}` })
      .then((response) => {
        if (!response) {
          res.redirect("/");
          return;
        } else {
          res.status(200).send(response);
          return;
        }
      })
      .catch((err) => {
        res.send("error finding single user" + err);
        return;
      });
  }
};
exports.updateUser = (req, res) => {
  if (Object.entries(req.body).length === 0) {
    res.status(500).send(req.body);
    return;
  }
  var id = req.params.id;
  userDb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.send("User Does not exist");
        return;
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(400).send({ message: "No such user",err });
    });
};
exports.loginauth = (req, res) => {
  if (!req.body) {
    res.send("Insert values first");
  }
  userDb
    .find()
    .then((response) => {
      for (let i = 0; i < response.length; i++) {
        if (
          response[i].email === req.body.email &&
          response[i].password === req.body.password
        ) {
          let payload = { subject: req.body.email + req.body.password };
          let token = jwt.sign(payload, "secretkey");
          res.status(200).send({ ...response[i]._doc, token });
          return;
        }
      }
    })
    .catch((err) => {
      res.status(400).send("could not login user" + err);
      return;
    });
};
exports.aggregateEvent = (req,res) => {
  let id = req.params;
  if(!id){
    res.send('cannot Send empty data'); 
    return;
  } 
  else {
    movieDb.aggregate([
      {$lookup:
      {
        from: "events",
        localField: "event",
        foreignField: "_id",
        as: "event_name"
      }}])
  }
  
}
