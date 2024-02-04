import React, { useState } from 'react';
import axios from 'axios';
import NavigationBar from '../Components/NavBar';
import { BrowserRouter as  Link } from "react-router-dom";
function Esports() {
  const [Name, setName] = useState('');
  const [Rank, setRank] = useState('');
  const [Country, setCountry] = useState('');
  const [Points, setPoints] = useState('');

  const handleAppendData = async () => {
    try {
      console.log('Sending request to backend:', Name, Points, Rank, Country);
      const response = await axios.post('http://localhost:5005/appendData', {
        sheetId: '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g',
        values: [Name, Country, Rank, Points],
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
        <NavigationBar/>
        <h1>E Sports</h1>
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
      <a href='/host/dashboard/'>dashboard</a><br/>
    </div>
  );
}

export default Esports;
