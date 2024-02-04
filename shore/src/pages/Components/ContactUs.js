import React, { useState } from 'react';
import axios from 'axios';

function UserContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/contactus', formData);
      console.log(response.data);
      alert("Contactus successful");
    } catch (error) {
      console.error('Contactus failed. Please try again.');
      alert('Contactus failed. Please try again.');
    }

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} style={textareaStyle} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

export default UserContactUs;
