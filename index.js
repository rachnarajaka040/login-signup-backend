const express = require('express');
const connect = require('./config/db');
const characterController = require('./controller/UserController');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount the controller
app.use('/api/rachna/character', characterController);

const PORT = 3000;
app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Server started on port ${PORT}`);
    } catch (error) {
        console.error(error);
    }
});
