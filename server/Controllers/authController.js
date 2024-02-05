const User = require('../Models/AdminSchema')
const {hashPwd, comparePwd} = require('../helpers/auth')
const bcrypt = require("bcrypt")
const JWT = require("jsonwebtoken")
require('dotenv')
const test = (req, res) => {
    res.json('test is working')
}

// Register Endpoint; endpoint connected to route in LoginOut.js
const register = async(req, res) => {
    try{
       // rename req.body information sent by user
       const {email, username, password} = req.body 
       // three if statements check if form fields are entered
       // toast picks up error body and displays as notification
       if(!email) {
        return res.json({
            error: 'Email is required'
        })
       };
       if(!username) {
        return res.json({
            error: 'username is required'
        })
       };
       if(!password || password.length < 6) {
        return res.json({
            error: 'pwd is required and should be greater than 6 letters'
        })
       };

       const exist = await User.findOne({email})
       if(exist){
        return res.json({
            error: 'Email Exists'
        })
       }

       // create a hashed password using hashPwd helper function
       const hashedPwd = await hashPwd(password)

       // create user with req.body infromation
       const user = User.create({
        email, username, password:hashedPwd
       })

       return res.json(user)


    }catch (error) {
        console.log(error)
    }
}
// Login Endpoint;endpoint connected to route in LoginOut.js
const login = async(req, res) => {
    try{
        // take the username user logs in with and store in const username
        const {username, password} = req.body;
        console.log(username)
        console.log(password)
        // Check if user exists
        const user = await User.findOne({username})
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        // If user exists, then check passwords match
        const match = await comparePwd(password, user.password)
        console.log(match)

        if(match){
            JWT.sign({username: user.username, id: user_id, name: user.name}, process.env.JWT_SECRET, 
                {}, (err, token)  => {
                    if(err) throw err

                    res.cookie('token', token).json(user)
                })
            res.json(
                'passwords match'
            )
        }
        else{
            return res.json({
                error: 'Incorrect Password'
            })
        }
                
            
    }catch(error){

    }
}

module.exports = {
    test,
    register,
    login
}