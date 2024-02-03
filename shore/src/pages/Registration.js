import axios from 'axios';
import React, { useState } from 'react';
// import "./styles/userregistrationform.css";

function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    profilePic: '',
    username: '',
    email: '',
    country: '',
    address: '',
    phone: '',
    eventCategory: '', // Esports/Sports/Hackathon
    expertise: '', // Game/Sport/Domain
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respponse = await axios.post('/api/register',formData);
      console.log(respponse.data);
      alert("Registraton  successfull");
    } catch (error) {
      console.error('Registration failed Pls try again');
      alert('Registration failed pls try again');
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Profile Picture:</label>
        <input
          type="file"
          name="profilePic"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Event Category:</label>
        <select name="eventCategory" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Esports">Esports</option>
          <option value="Sports">Sports</option>
          <option value="Hackathon">Hackathon</option>
        </select>
      </div>
      <div>
        <label>Expertise:</label>
        <select name="expertise" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Game">Game</option>
          <option value="Sport">Sport</option>
          <option value="Domain">Domain</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default UserRegistrationForm;
