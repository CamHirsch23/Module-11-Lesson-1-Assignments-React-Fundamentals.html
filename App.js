// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
