const LibrarySchema = require('../model/model') 
const AuthorSchema = require('../model/authmodel') 
const userDb = require('../model/usermodel')
const jwt = require('jsonwebtoken')
const axios = require('axios');



exports.addbook=(req,res) => {
    if(Object.entries(req.body).length === 0){
        res.status(400).send(`Cannot Insert Empty value ${req.query}`);
        return ;
    }
   var book = new LibrarySchema({
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
        desc: req.body.desc,
        about: req.body.about,
   })

   book
        .save()
        .then(data => {
            res.redirect('/')
        })
        .catch(e=>{
            res.send('Error updating'+e)
        })
}
exports.updatebook=(req,res) => {
if(Object.entries(req.body).length === 0){
        res.status(500).send(req.body);
        return;
    }
    var id = req.params.id;
    LibrarySchema.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send('User Does not exist')
                return;
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(400).send({message:'No such user'})
        })
    }

exports.findbook=(req,res) => {
    if(req.params.id){
        const vid = req.params.id;
        LibrarySchema.findById(vid)
            .then(data=>{
                if(!data){
                    res.send('Id not found')
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.send(err + vid)
                // res.send('Error finding unique Id')
            })
    }
    else{
        LibrarySchema.find()
            .then(data=>{
                    res.send(data)
                })
            .catch(err=>{
                res.send('Error findng all data')
            })
            }
        }

exports.deletebook=(req,res) => {
        var id = req.params.id;
        LibrarySchema.findByIdAndDelete(id)
            .then(data=>{
                if(!data){
                    res.send('User Does not exist')
                    return;
                }
                res.send('data got deleted successfully')
            })
            .catch(err => {
                res.status(400).send({message:'No such user'})
            })
        }

exports.addauthor = (req,res) => {
    if(!req.body){
        res.status(400).send(`Cannot Insert Empty value ${req.query}`);
        return ;
    }
    let author = new AuthorSchema ({
        name : req.body.name,
        books :req.body.books,
        Age : req.body.age,
        img : req.body.img,
        desc : req.body.desc,
    })

    author
        .save()
        .then(data=>{
            // res.send(data)
            res.redirect('/authors')
        })
        .catch(err=>{
            res.status(400).send('Error Adding data to db')
        })
}

exports.updateauthor = (req,res) => {
    if(!req.body){
        res.status(400).send(`Cannot update Empty value ${req.query.data}`);
        console.log(req.query.data);
        res.send(req.body)
        return ;
    }
    let id = req.params.id;
    AuthorSchema.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.send('Id not found '+data)
                return;
            }
            else{
                res.send('Data updated succesfuly'+data)
                return;

            }
        })
        .catch(err=>{
            res.send('Could not update data'+err)
            return;

        })
}
exports.deleteauthor = (req,res) => {
    let id = req.params.id;
    AuthorSchema.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.send('Id not found')
            return;
        }
        else{
            res.send('data deleted'+data);
            // next()
        }
    })
    .catch(err=>{
        res.send('Error deleting data'+err)
    })
}
exports.findauthor = (req,res) => {
    if(req.params.id){
        let id = req.params.id;
        AuthorSchema.findById(id)
            .then(data=>{
                if(!data){
                    res.send('Id not found')
                    return;
                }
                else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.send('Error fetching single user data'+err)
                return;

            })
    }
    else{
        AuthorSchema.find()
            .then(data=>{
                    res.send(data)
                    return;

            })
            .catch(err=>{
                res.send('Error fetching data'+err)
                return;

            })

    }
}

exports.adduser = (req,res) => {
    if(!req.body){
        res.send("Empty data cannot be inserted")
        return ;
    }
    let user = new userDb ({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role,
        })
        user
            .save()
            .then(response=>{
                res.send(response)
                return;

            })
            .catch(err=>{
                res.send('Could not upload user'+err)
                return;

            })
}
exports.finduser = (req,res) => {
    if(!req.params.id){
        userDb.find()
            .then(response=>{
                res.send(response)
                return;

            })
            .catch(err=>{
                res.send('Could not fetch full user data '+err)
                return;

            })
    }
    else{
        var id = req.params.id;
        userDb.findOne({email:`${id}`})
        .then(response=>{
            if(!response){
                res.redirect('/')
                return;
            }
            else{
                res.send(response)
                return;
            }
        })
        .catch(err=>{
            res.render('/login')
            return;

        })
    }
}
exports.loginauth = (req,res) => {
    if(!req.body){
        res.send('Insert values first')
    }
    userDb.find()
        .then(response=>{
            for(let i=0;i<response.length;i++){
                if (response[i].email === req.body.email && response[i].password === req.body.password){
                        let payload = {subject:req.body.email+req.body.password};
                        let token = jwt.sign(payload,'secretkey');
                        res.status(200).send({...response[i]._doc, token});
                        return;
                    }
                }
            })
        .catch(err=>{
            res.staus(400).send('could not login user'+err); 
            return;

        })

}
