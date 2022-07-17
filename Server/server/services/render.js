const axios = require('axios');

//Get request for Homepage
exports.homeroute = (req,res) => {
    axios.get(`https://libraryapp3134.herokuapp.com/api/books`)
        .then(response=>{
            res.render('index',{
                title : 'Library',books : response.data, username : req.session.userid , admin : req.session.admin
            })
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data books'+err})
        })
    
}
exports.singlebook = (req,res)=>{
    const id = req.params.id;
    axios.get(`https://libraryapp3134.herokuapp.com/api/books/${id}`)
        .then(response=>{
            res.render('singlebook',{book : response.data , username : req.session.userid , admin : req.session.admin})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data single book'+err})
        })
}
exports.authors = (req,res) => {
    axios.get(`https://libraryapp3134.herokuapp.com/api/author`)
        .then(response=>{
            res.render('authors',{authors : response.data, username : req.session.userid , admin : req.session.admin})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving data authors'+err})
        })
}

exports.singleauthor = (req,res) => {
    const id = req.params.id;
    axios.get(`https://libraryapp3134.herokuapp.com/api/author/${id}`)
        .then(response=>{
            res.render('singleauthor',{author : response.data,username : req.session.userid , admin : req.session.admin})
        })
        .catch(err=>{
            res.status(400).send({message:'error retreiving single author '+err})
        })
}

exports.login = (req,res) => {
    axios.get(`https://libraryapp3134.herokuapp.com/api/users`)
        .then(response => {
            res.render('login',{users : response.data, username : req.session.userid , admin : req.session.admin})
        })
        .catch(err=> {
            res.send('Could not fetch data' + err);
        })
}

exports.usersvalid = (req,res) => {
    var session;
    if(!req.body){
        res.send('Insert Values');
        return;
    }
    axios.get(`https://libraryapp3134.herokuapp.com/api/users`)
        .then(response=>{
            for(let i=0;i<response.data.length;i++){
                if (response.data[i].username === req.body.username){
                    if (response.data[i].password === req.body.password){
                        session = req.session;
                        session.userid = req.body.username;
                        session.admin = response.data[i].admin;
                        console.log(req.session)
                        res.redirect('/') 
                        // res.send('password confirmed')
                    }
                    else{
                        res.redirect('/login')
                        // res.send('Enter right password')
                    }
                }
            }
            // res.send('No user Was Found '+response.data)
            
             
        })
}

exports.logout = (req,res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.redirect('/');
    }
)}




