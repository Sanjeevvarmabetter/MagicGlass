const express = require('express');
const mongoose = require('mongoose');
const Registration = require('./models/registrationform'); // Import the Registration model

const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://shore:shore@cluster0.uubfvtd.mongodb.net/registration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.error("MongoDb connection error", err));

// Middleware
app.use(express.json());

// Route to handle registration form data
app.post('/api/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body); // Use the Registration model
        await newRegistration.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to get data
app.get('/getdata', async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (error) {
        console.error('Error getting data', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log("Server is running");
});
