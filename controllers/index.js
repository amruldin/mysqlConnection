const path = require('path');
const Users = require('../model/data');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

exports.createUser = (req, res,next) =>
{   console.log(req.body);
    res.render('createUser',{title:'create user'});
};

exports.postData = (req, res ,next) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let user_name = req.body.user_name;
    new Users(null,user_name,email,first_name,last_name).save();

    res.redirect('/');
};


exports.getIndex = (req,res, next) => {
    Users.fetchAll()
    .then(([data]) =>{
        res.render('index',{items:data, title:'user'})
    })
    .catch(err=>{
        console.log(err);
    })
};


