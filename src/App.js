import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', backgroundColor: ' lightblue' }}></div>
      <Home />
      <About />
    </>
  );
};

export default App;
