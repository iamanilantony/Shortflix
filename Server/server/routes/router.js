const express = require('express')
const controller = require('../controller/controller')
const services = require('../services/render')

const router = express.Router()  

function verifyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).send('Unauthorized request');
    let token = req.headers.authorization.split('')[1]
    if(token=='null') return res.status(401).send('Unauthorized request');
    let payload = jwt.verify(token,'secretkey')
    console.log(payload)
    if(!payload) return res.status(401).send('Unauthorized request');
    req.userId=payload.subject;
    next()
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

//service routes
router.get('/',services.homeroute)
router.get('/singlebook/:id',services.singlebook)
router.get('/authors',services.authors)
router.get('/author/:id',services.singleauthor)
router.get('/login',services.login)

//exp
router.post('/loginauth',controller.loginauth)


module.exports = router