// Host.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5013;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://shore:shore@cluster0.uubfvtd.mongodb.net/communityMessages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
});

const Message = mongoose.model('Message', messageSchema);

app.post('/postMessage', async (req, res) => {
  const { text, user } = req.body;

  try {
    if (!text || !user) {
      return res.status(400).json({ success: false, message: 'Text and user are required fields' });
    }

    const newMessage = new Message({ text, user });
    await newMessage.save();

    res.json({ success: true, message: 'Message posted successfully' });
  } catch (error) {
    console.error('Error posting message:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/getMessages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
