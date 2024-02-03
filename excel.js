// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

const auth = new google.auth.GoogleAuth({
  keyFile: 'sheets-413014-e7e04847c9fd.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

app.post('/appendData', async (req, res) => {
  const { sheetId, values, sheetName, range } = req.body;
  console.log('Received request:', sheetId, values);

  try {
    // Find the first empty row in the specified range
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: range,
    });

    const valuesRange = response.data.values;
    let emptyRow = 2; // Start from row 2

    while (emptyRow <= valuesRange.length && valuesRange[emptyRow - 1].some(value => value !== '')) {
      emptyRow++;
    }

    // Append data to the found empty row
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${range.charAt(0)}${emptyRow}`,
      valueInputOption: 'RAW',
      resource: { values: [values] },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error appending data to Google Sheets:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
