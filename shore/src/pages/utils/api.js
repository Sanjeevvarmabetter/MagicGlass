// src/utils/api.js
import axios from 'axios';

const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1MkANq7qbigl_za_6mHACzAhg9srk-pefdtF9-71At3g/values';
const API_KEY = 'AIzaSyCPBRAIbFr00RJoxCnfSy-gT3EOHxjuLSw'; // Replace with your Google Sheets API key

export const fetchRankData = async (sheetName) => {
  try {
    const response = await axios.get(`${BASE_URL}/${sheetName}?key=${API_KEY}`);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
};
