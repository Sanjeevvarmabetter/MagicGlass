// App.js

import React from 'react';
import GoogleSheetData from '../Components/RankTable';

const App = () => {
  return (
    <div>
      <h1>Rankings </h1>
      <GoogleSheetData />
      <a href='/'>Home</a>
    </div>
  );
};

export default App;
