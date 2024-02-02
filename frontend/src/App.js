import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes,Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
        <Router>
          <Route path='/' element={Home} />
          <Route path='/' element={About} />
        </Router>
    </div>
  );
}

export default App;
