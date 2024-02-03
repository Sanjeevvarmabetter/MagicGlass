import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HackathonData = () => {
  const [hackathonData, setHackathonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spreadsheetId = '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g';
        const hackathonRange = 'Sheet1!K2:P';
        const apiKey = 'AIzaSyCPBRAIbFr00RJoxCnfSy-gT3EOHxjuLSw';

        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${hackathonRange}?key=${apiKey}`);
        setHackathonData(response.data.values);
      } catch (error) {
        console.error('Error fetching Hackathon data:', error);
      }
    };

    fetchData();
  }, []);


  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div>
        <h2 style={{ color: "#000" }}>Hackathon Data</h2>
            <table style={tableStyle}>
                {/* Render Hackathon data */}
                <tbody>
                    {hackathonData.map((row, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{row[0]}</td>
                            <td style={tdStyle}>{row[1]}</td>
                            <td style={tdStyle}>{row[2]}</td>
                            <td style={tdStyle}>{row[3]}</td>
                            <td style={tdStyle}>{row[4]}</td>
                            <td style={tdStyle}>{row[5]}</td>
                            {/* Add more cells based on your sheet structure */}
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
};

export default HackathonData;
