const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,// 공백제거
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
   image: String,
   token: {
    type: String
   },
   tokenExp: {
    type: Number
   }
})
userSchema.pre('save',function(next){

})

const User = mongoose.model('User', userSchema)

module.exports = { User }   // 다른곳에서도 사용할 수 있게, 유저 스키마 작성



