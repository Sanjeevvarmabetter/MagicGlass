const mongoose = require('mongoose');

const contactusFormSchema = new mongoose.Schema({
    name : String,
    email : String,
    message : String
});

const ContactUs = mongoose.model('ContactUS', contactusFormSchema);

module.exports = ContactUs;
