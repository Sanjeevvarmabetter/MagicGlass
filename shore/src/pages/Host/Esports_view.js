import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EsportData = () => {
    const [esportData, setEsportData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const spreadsheetId = '1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g';
                const esportRange = 'Sheet1!A2:D';
                const apiKey = 'AIzaSyCPBRAIbFr00RJoxCnfSy-gT3EOHxjuLSw';

                const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${esportRange}?key=${apiKey}`);
                setEsportData(response.data.values);
            } catch (error) {
                console.error('Error fetching Esport data:', error);
            }
        };

        fetchData();
    }, []);

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '20px',
        margin: '20px',
        backgroundColor: '#808080',
    };

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
        <div style={cardStyle}>
            <h2 style={{ color: "#000" }}>Esport Data</h2>
            <table style={tableStyle}>
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
        </div>
    );
};

export default EsportData;
