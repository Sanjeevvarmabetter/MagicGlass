const express = require('express');
const router = express.Router();
const ContactUs = require('../models/contactusform')

router.post('/contactus', async (req, res) => {
    try {
        const {name,email,message} = req.body;

        const newContactUs = new ContactUs({
            name : name,
            email : email,
            message : message
        });

        await newContactUs.save();

        res.status(201).json({ message: 'User Contact us successfully' });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;