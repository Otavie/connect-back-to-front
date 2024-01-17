// Import Necessary Modules and Files
const express = require('express');
const UserModel = require('./model');
const db = require('./database');
const bodyParser = require('body-parser');

const PORT = 4040;

// Create ab Express Server Instance
const server = express();

// Configure Middleware to Parse JSON in the Request Body
server.use(express.json());

// Connect to the Database
db.connectToDB();

// Configure Middleware to Parse URL Encoded Data in the Request Body
server.use(bodyParser.urlencoded({ extended: false }))

// Define a Route for the Root/Home Page Endpoint to Serve an HTML Page
server.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

// Define a Route for Handling Post Request During Form Submission
server.post('/', async (req, res) => {
    try {
        // Extract First Name and Last Name from the Request Body
        const { firstname, lastname } = req.body;

        // Create a New User Instance using the UserModel
        const newUser = new UserModel({ firstname, lastname })

        // Serve the New User in the Database
        await newUser.save();

        // Send a Response to the User After Form Submission
        res.send('User details saved!');
    } catch (error) {
        // Log Any Error that Occur During the Process
        console.log(error);

        // Send a 500 Internal Server Error
        res.status(500).send('Internal Server Error!')
    }
})

// Start the Server and Listen on the Specified PORT
server.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})