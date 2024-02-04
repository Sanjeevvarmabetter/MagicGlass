// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://shore:shore@cluster0.uubfvtd.mongodb.net/socialLinks', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Social Link Schema
const socialLinkSchema = new mongoose.Schema({
  platform: String,
  link: String,
});

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

// Retrieve social links
app.get('/api/social-links', async (req, res) => {
  try {
    const socialLinks = await SocialLink.find();
    res.json(socialLinks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Upload social link
app.post('/api/social-links', async (req, res) => {
  const { platform, link } = req.body;

  if (!platform || !link) {
    return res.status(400).json({ error: 'Bad Request' });
  }

  try {
    const newSocialLink = new SocialLink({ platform, link });
    await newSocialLink.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5015;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
