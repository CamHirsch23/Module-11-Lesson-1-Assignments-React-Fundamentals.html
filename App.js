import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './PortfolioStyles.css'; // Assuming this is the correct path for your CSS file

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
