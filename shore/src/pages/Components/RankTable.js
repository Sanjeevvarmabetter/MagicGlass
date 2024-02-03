// GoogleSheetData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleSheetData = () => {
    const [esportData, setEsportData] = useState([]);
    const [sportData, setSportData] = useState([]);
    const [hackathonData, setHackathonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const spreadsheetId = '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g';
                const esportRange = 'Sheet1!A2:D';
                const sportRange = 'Sheet1!F2:I';
                const hackathonRange = 'Sheet1!K2:P';
                const apiKey = 'AIzaSyCPBRAIbFr00RJoxCnfSy-gT3EOHxjuLSw';

                const [esportResponse, sportResponse, hackathonResponse] = await Promise.all([
                    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${esportRange}?key=${apiKey}`),
                    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sportRange}?key=${apiKey}`),
                    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${hackathonRange}?key=${apiKey}`)
                ]);

                // Process the responses and set the data
                setEsportData(esportResponse.data.values);
                setSportData(sportResponse.data.values);
                setHackathonData(hackathonResponse.data.values);
            } catch (error) {
                console.error('Error fetching data from Google Sheets:', error);
            }
        };

        fetchData();
    }, []);

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    };

    const tdStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    };

    return (
        <div>
            <h2 style={{ color: "#000" }}>Esport Data</h2>
            <table style={tableStyle}>
                {/* Render Esport data */}
                <tbody>
                    {esportData.map((row, index) => (
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
    );
};

export default GoogleSheetData;
