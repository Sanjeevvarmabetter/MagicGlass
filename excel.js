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
  const { sheetId, row, column, data } = req.body;
  console.log('Received request:', sheetId, row, column, data);

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: `${column}${row}`,
      valueInputOption: 'RAW',
      resource: { values: [[data]] },
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
