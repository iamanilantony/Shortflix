const express = require('express')
const controller = require('../controller/controller')
const services = require('../services/render')

const router = express.Router()  

//auth middleware
const auth = (req,res,next) => {
    if(req.session.userid){
        next();
    } 
    else{
        res.redirect('/login')
    }
}

//restful api books
router.post('/api/books',controller.addbook)
router.put('/api/books/:id',controller.updatebook)
router.get('/api/books/:id',controller.findbook)
router.get('/api/books',controller.findbook)
router.delete('/api/books/:id',controller.deletebook)

//restful api author
router.post('/api/author',controller.addauthor)
router.put('/api/author/:id',controller.updateauthor)
router.get('/api/author/:id',controller.findauthor)
router.get('/api/author',controller.findauthor)
router.delete('/api/author/:id',controller.deleteauthor)

//restful api user
router.post('/api/users',controller.adduser)
router.get('/api/users',controller.finduser)
router.get('/api/users/:id',controller.finduser)

//validate login
router.post('/api/usersvalid',services.usersvalid)

//session destroy on logout
router.post('/logout',services.logout)

//service routes
router.get('/',auth,services.homeroute)
router.get('/singlebook/:id',auth,services.singlebook)
router.get('/authors',auth,services.authors)
router.get('/author/:id',auth,services.singleauthor)
router.get('/login',services.login)


module.exports = router