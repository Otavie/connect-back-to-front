const express = require('express');
const UserModel = require('./model');
const db = require('./database');
const bodyParser = require('body-parser');
const PORT = 4040;
const server = express();

server.use(express.json());
db.connectToDB();
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

server.post('/', async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const newUser = new UserModel({ firstname, lastname })
        await newUser.save();
        res.send('User details saved!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error!')
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})