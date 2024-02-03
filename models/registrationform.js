const mongoose = require('mongoose');

const registrationFormSchema = new mongoose.Schema({
    username: String,
    email: String,
    country: String,
    address: String,
    phone: String,
    eventCategory: String,
    expertise: String
});

const Registration = mongoose.model('Registration', registrationFormSchema);

module.exports = Registration;
