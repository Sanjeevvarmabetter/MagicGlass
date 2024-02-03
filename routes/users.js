const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Route to fetch user profile data
router.get('/profile', async (req, res) => {
  try {

    const user = await Registration.findOne({ /* query to find the user */ });
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;



