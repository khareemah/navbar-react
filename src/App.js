import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <div style={{ height: '60vh', backgroundColor: 'black' }}></div>
    </>
  );
};

export default App;
