import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SportData = () => {
  const [sportData, setSportData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const spreadsheetId = '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g';
        const sportRange = 'Sheet1!F2:I';
        const apiKey = 'AIzaSyCPBRAIbFr00RJoxCnfSy-gT3EOHxjuLSw';

        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sportRange}?key=${apiKey}`);
        setSportData(response.data.values);
      } catch (error) {
        console.error('Error fetching Sport data:', error);
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

<h2 style={{ color: "#000" }}>Sport Data</h2>
            <table style={tableStyle}>
                {/* Render Sport data */}
                <tbody>
                    {sportData.map((row, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{row[0]}</td>
                            <td style={tdStyle}>{row[1]}</td>
                            <td style={tdStyle}>{row[2]}</td>
                            <td style={tdStyle}>{row[3]}</td>
                            {/* Add more cells based on your sheet structure */}
                        </tr>
                    ))}
                </tbody>
            </table>
  </div>

  );
};

export default SportData;
