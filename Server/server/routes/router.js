const express = require("express");
const controller = require("../controller/controller");
const services = require("../services/render");

const router = express.Router();

function verifyToken(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Unauthorized request");
  let token = req.headers.authorization.split("")[1];
  if (token == "null") return res.status(401).send("Unauthorized request");
  let payload = jwt.verify(token, "secretkey");
  console.log(payload);
  if (!payload) return res.status(401).send("Unauthorized request");
  req.userId = payload.subject;
  next();
}

//restful api events
router.post("/api/events", controller.addevent);
router.put("/api/events/:id", controller.updateevent);
router.get("/api/events/:id", controller.findevent);
router.get("/api/events", controller.findevent);
router.delete("/api/events/:id", controller.deleteevent);
router.get('/api/eventmovies/:id',controller.findEventMovies);


//restful api movie
router.post("/api/movie", controller.addmovie);
router.put("/api/movie/:id", controller.updatemovie);
router.get("/api/movie/:id", controller.findmovie);
router.get("/api/movie", controller.findmovie);
router.delete("/api/movie/:id", controller.deletemovie);
router.put("/api/movie/marks/:id", controller.updateMarks);
router.get('/api/usersmovie/:id',controller.findUsersMovies);
router.put('/api/addguest/:id',controller.updateGuests);
router.put('api/removeguest/:id',controller.deleteGuest);

//restful api user
router.post("/api/users", controller.adduser);
router.get("/api/users", controller.finduser);
router.get("/api/users/:id", controller.finduser);
router.put("/api/users/:id", controller.updateUser);
router.get("/api/guests", controller.findGuests);


//validate login
router.post("/api/usersvalid", services.usersvalid);

//service routes
router.get("/", services.homeroute);
router.get("/singlebook/:id", services.singlebook);
router.get("/authors", services.authors);
router.get("/author/:id", services.singleauthor);
router.get("/login", services.login);

//exp
router.post("/loginauth", controller.loginauth);


module.exports = router;
