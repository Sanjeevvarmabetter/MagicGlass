// src/components/Sports.js
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as  Link } from "react-router-dom";
function Sports() {
  const [Name, setName] = useState('');
  const [Rank, setRank] = useState('');
  const [Country, setCountry] = useState('');
  const [Points, setPoints] = useState('');

  const handleAppendData = async () => {
    try {
      console.log('Sending request to backend:', Name, Points, Rank, Country);
      const response = await axios.post('http://localhost:5005/appendData', {
        sheetId: '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g',
        sheetName: 'sports', // Specify the sheet name for "Sports" page
        values: [Name, Country, Rank, Points],
        range: 'F:I', // Specify the column range for "Sports" page (columns F-I)
      });

      if (response.data.success) {
        console.log('Data appended successfully.');
        // Clear the input fields after successful submission
        setName('');
        setCountry('');
        setRank('');
        setPoints('');
      } else {
        console.error('Failed to append data:', response.data.error);
      }
    } catch (error) {
      console.error('Error appending data:', error.message);
    }
  };

  return (
    <div>
      <h1>Sports</h1>
      <label>
        Name:
        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Country:
        <input type="text" value={Country} onChange={(e) => setCountry(e.target.value)} />
      </label>
      <label>
        Rank:
        <input type="number" value={Rank} onChange={(e) => setRank(e.target.value)} />
      </label>
      <label>
        Points:
        <input type="number" value={Points} onChange={(e) => setPoints(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAppendData}>Append Data</button>
      <br></br>
      
    </div>
  );
}

export default Sports;
