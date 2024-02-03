// src/components/Hackathons.js
import React, { useState } from 'react';
import axios from 'axios';

function Hackathons() {
  const [Name, setName] = useState('');
  const [Rank, setRank] = useState('');
  const [Country, setCountry] = useState('');
  const [Points, setPoints] = useState('');
  const [Domain, setDomain] = useState('');
  const [NoOfWins, setNoOfWins] = useState('');

  const handleAppendData = async () => {
    try {
      console.log('Sending request to backend:', Name, Points, Rank, Country, Domain, NoOfWins);
      const response = await axios.post('http://localhost:5005/appendData', {
        sheetId: '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g',
        sheetName: 'hackathons',
        values: [Name, Country, Rank, Points, Domain, NoOfWins],
        range: 'K:P',
      });

      if (response.data.success) {
        console.log('Data appended successfully.');
        // Clear the input fields after successful submission
        setName('');
        setCountry('');
        setRank('');
        setPoints('');
        setDomain('');
        setNoOfWins('');
      } else {
        console.error('Failed to append data:', response.data.error);
      }
    } catch (error) {
      console.error('Error appending data:', error.message);
    }
  };

  return (
    <div>
      <h1>Hackathon</h1>
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
      <label>
        Domain:
        <input type="text" value={Domain} onChange={(e) => setDomain(e.target.value)} />
      </label>
      <label>
        No. of Wins:
        <input type="number" value={NoOfWins} onChange={(e) => setNoOfWins(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAppendData}>Append Data</button>
    </div>
  );
}

export default Hackathons;
