// CommunityMessageBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Install axios using npm install axios

const CommunityMessageBox = ({ userEmail }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handlePostMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        // Send the new message to the server
        await axios.post('http://localhost:5013/postMessage', {
          text: newMessage,
          user: userEmail,
        });

        // Fetch updated messages
        fetchMessages();
        setNewMessage('');
      } catch (error) {
        console.error('Error posting message:', error.message);
      }
    }
  };

  const fetchMessages = async () => {
    try {
      // Fetch messages from the server
      const response = await axios.get('http://localhost:5013/getMessages');
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }
  };

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Community Message Box</h2>

      {/* Message Input */}
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Write your message..."
      />
      <br />
      <button onClick={handlePostMessage}>Post Message</button>

      {/* Display Messages */}
      <div>
        {messages.map((message, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>{message.text}</p>
            <p>User: {message.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityMessageBox;
