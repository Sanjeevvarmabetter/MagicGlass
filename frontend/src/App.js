import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
}

export default App;
