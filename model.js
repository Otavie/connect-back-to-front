// Import the Mongoose Library for MongoDB Interaction
const mongoose = require('mongoose');

// Create a Mongoose Schema for the 'UserDetails' Collection
const userSchema = new mongoose.Schema({
    // Define the 'firstname' Field with Required Conditions
    firstname: {
        type: String,
        required: true
    },
    // Define the 'lastname' Field with Required Conditions
    lastname: {
        type: String,
        required: true
    }
})

// Create a Mongoose Model Based on the Schema for the 'UserDetails'
const UserDetails = mongoose.model('UserDetails', userSchema);

// Export UserDetails so that it can be Imported
module.exports = UserDetails;