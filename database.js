const mongoose = require('mongoose');
const DB_URI = "mongodb+srv://otavie:1234@threecu-cluster.8yarvq3.mongodb.net/threecu?retryWrites=true&w=majority"

const connectToDB = () => {
    mongoose.connect(DB_URI);

    mongoose.connection.on("connected", () =>{
        console.log('Database successfully connected')
    });
}

module.exports = {
    connectToDB
}