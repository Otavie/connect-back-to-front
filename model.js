const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

const UserDetails = mongoose.model('UserDetails', userSchema);
module.exports = UserDetails; 