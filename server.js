const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://shore:shore@cluster0.uubfvtd.mongodb.net/registration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo Connected"))
    .catch(err => console.error("MongoDb connection error",err));


const userSchema = new mongoose.Schema({
        profilePic: String,
        username: String,
        email: String,
        country: String,
        address: String,
        phone: String,
        eventCategory: String,
        expertise: String
});
      
const user = mongoose.model('User', userSchema);

//middleware 

app.use(express.json());

app.post('/api/register', async (req, res) => {
    try {
        const newUser = new UserActivation(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch(error) {
        console.error('Error registering user', error);
        res.status(500).json({ message:'Internal server error'});
    }
});


app.listen(PORT, () => {
    console.log("Server is running")
})