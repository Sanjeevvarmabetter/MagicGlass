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

    // Render Esport data
    return (
        <div>
            <h2 style={{ color: "#000" }}>Esport Data</h2>
            <table>
                <tbody>
                    {esportData.map((row, index) => (
                        <tr key={index}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            {/* Add more cells based on your sheet structure */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EsportData;
