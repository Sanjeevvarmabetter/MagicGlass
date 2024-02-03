// Import necessary dependencies
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
      const response = await axios.post('http://localhost:5000/contactus', formData);
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserContactUs;
