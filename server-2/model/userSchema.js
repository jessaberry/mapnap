const mongoose = require('mongoose');

// Defining the user schema
const userSchema = new mongoose.Schema({
    userMail: String,
    userPassword: String,

});

const user = mongoose.model('user', userSchema);
module.exports = user;