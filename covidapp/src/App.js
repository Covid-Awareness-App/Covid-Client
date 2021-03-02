import './App.css';

// Import Components
import Header from './Components/Header';
import Navbar from './Components/Navbar.jsx';
import StateDetails from './Components/StateDetails.jsx'
import LocationDetails from './Components/LocationDetails.jsx';
// import SearchContext from './Components/SearchContext.jsx';
import Footer from './Components/Footer.jsx';

// Import Library Functionality
// import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route path="/state/:id"
             render={(routerProps) => <StateDetails match={routerProps.match}/>}/>
      <Route path="/locations/:id"
             render={(routerProps) => <LocationDetails match={routerProps.match}/>}/>
      <Footer />
    </div>
  );
}

export default App;
