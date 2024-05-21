const mongoose = require('mongoose')
const schema = mongoose.Schema

const course = new schema({
name:{type:String,default:"default"},
description:{type:String},
image:{type:String},
createdat:{type:Date,default:Date.now},
updatedat:{type:Date,default:Date.now},
})

module.exports = mongoose.model('course',course)