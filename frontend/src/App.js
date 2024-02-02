import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/' element={About} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
