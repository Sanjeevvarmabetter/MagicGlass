// src/components/SpreadsheetApp.js
import React, { useState } from 'react';
import axios from 'axios';

const SpreadsheetApp = () => {
  const [userRow, setUserRow] = useState('');
  const [userColumn, setUserColumn] = useState('');
  const [userData, setUserData] = useState('');

  const handleAppendData = async () => {
    try {
      console.log('Sending request to backend:', userRow, userColumn, userData);
      const response = await axios.post('http://localhost:5005/appendData', {
        sheetId: '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g',
        row: userRow,
        column: userColumn,
        data: userData,
      });

      if (response.data.success) {
        console.log('Data appended successfully.');
      } else {
        console.error('Failed to append data:', response.data.error);
      }
    } catch (error) {
      console.error('Error appending data:', error.message);
    }
  };

  return (
    <div>
      <label>
        Row Number:
        <input type="number" value={userRow} onChange={(e) => setUserRow(e.target.value)} />
      </label>
      <br />
      <label>
        Column Letter:
        <input type="text" value={userColumn} onChange={(e) => setUserColumn(e.target.value.toUpperCase())} />
      </label>
      <br />
      <label>
        Data to Append:
        <input type="text" value={userData} onChange={(e) => setUserData(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAppendData}>Append Data</button>
    </div>
  );
};

export default SpreadsheetApp;
