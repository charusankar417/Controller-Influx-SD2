const User = require('../Models/AdminSchema')
const {hashPwd, comparePWD} = require('../helpers/auth')
const test = (req, res) => {
    res.json('test is working')
}

const register = async(req, res) => {
    try{
       const {email, username, password} = req.body 
       // Check if email is what was entered
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

       const user = User.create({
        email, username, password
       })

       return res.json(user)


    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    register,
}