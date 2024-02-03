const express = require('express');
const router = express.Router();
const Registration = require('../models/registrationform');

router.post('/registration', async (req, res) => {
    try {
        const { profilepic, username, email, country, address, phone, eventCategory, expertise } = req.body;

        const newRegistration = new Registration({
            profilepic: profilepic,
            username: username,
            email: email,
            country: country,
            address: address,
            phone: phone,
            eventCategory: eventCategory,
            expertise: expertise
        });

        await newRegistration.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
