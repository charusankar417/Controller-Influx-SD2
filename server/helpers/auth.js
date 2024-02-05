const bcrypt = require("bcrypt")
const hashPwd = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
            
        })
    })
}

const comparePwd = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPwd,
    comparePwd
}