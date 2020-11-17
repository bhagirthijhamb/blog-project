const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    blogs: [String]
})

const User = mongoose.model('User', userSchema);
module.exports = User;