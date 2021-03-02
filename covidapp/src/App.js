import './App.css';

// Import Components
import Header from './Components/Header';
import Navbar from './Components/Navbar.jsx';
// import SearchContext from './Components/SearchContext.jsx';
import Footer from './Components/Footer.jsx';

// Import Library Functionality
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
