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
import { useState } from 'react';


function App() {
 const [stateId, setStateId] = useState("")

  return (
    <div className="App">
      <Header />
      <div className="main">
      <Navbar />
      <Route path="/state/:id"
             render={(routerProps) => <StateDetails setStateId={setStateId} match={routerProps.match}/>}/>
      <Route path="/locations/:id"
             render={(routerProps) => <LocationDetails stateId={stateId} match={routerProps.match}/>}/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
