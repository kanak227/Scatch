const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  {generateToken} = require('../utils/generateToken');

module.exports.registerUser =async function(req,res){
    try{
    const {fullname,  email , password} = req.body;
    if(!fullname || !email || !password){
        req.flash('error', 'All fields are required')
        return res.status(400).send("All fields are required");
    } 

    let user = await userModel.findOne({email});
    if(user){
        req.flash('error', 'User already exists')
        return res.status(400).redirect('/')};
     
    bcrypt.genSalt(10 , function(err , salt){
        bcrypt.hash(password , salt , async function (err , hash){
            let user = await userModel({
                    fullname,
                    email,
                    password: hash,
                })

                await user.save();
                
                let token = generateToken(user);
                res.cookie('token' , token);
                res.redirect("/");
        })
    })

    }
catch(err){
    req.flash('error', err.message);
    res.send(err.message);
    
}

    
}

module.exports.loginUser = async function(req,res){
    let {email , password} = req.body;
    let user = await userModel.findOne({email});
    if(user){
        bcrypt.compare(password , user.password , function(err, result){
            if(result){
                let token = generateToken(user);
                res.cookie('token' , token);
                res.redirect('/shop');
            }
            else{
                req.flash('error', 'Invalid email or password');
                return res.status(400).redirect('/');
            }
        })
    } else {
        req.flash('error', 'Invalid email or password');
        return res.status(400).redirect('/');
    }
}

module.exports.logOut = function(req, res) {
    res.cookie('token', '');
    res.redirect('/');
}