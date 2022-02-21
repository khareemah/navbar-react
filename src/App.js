import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      <div style={{ height: '60vh', backgroundColor: 'black' }}></div>
    </>
  );
};

export default App;
