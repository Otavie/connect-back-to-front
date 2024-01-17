// Import the Mongoose Library for MongoDB Interaction
const mongoose = require('mongoose');

// Get MongoDB URL
const DB_URI = "mongodb+srv://otavie:1234@threecu-cluster.8yarvq3.mongodb.net/threecu?retryWrites=true&w=majority"

// Function for Connecting to the MongoDB Database 
const connectToDB = () => {
    // Establish a Connection to the DB Using the DB_URI
    mongoose.connect(DB_URI);

    // Listen and Console Success Message When Connection is Established
    mongoose.connection.on("connected", () =>{
        console.log('Database successfully connected')
    });
}

// Export the connectToDB so that it can be Imported
module.exports = {
    connectToDB
}