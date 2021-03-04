import './App.css';

// Import Components
import Header from './Components/Header';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import StateDetails from './Components/StateDetails.jsx'
import LocationDetails from './Components/LocationDetails.jsx';
// import SearchContext from './Components/SearchContext.jsx';
import Footer from './Components/Footer.jsx';

// Import Library Functionality
// import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';


function App() {
 const [stateId, setStateId] = useState("")

  return (
    <div className="App">
      <Header />
      <div className="row">

        <div className="col-md-3">
          <Navbar />
        </div>

        <div className="col-md-9">

        <Switch>
          <Route exact path="/"
                render={(routerProps) => <Home match={routerProps.match}/>}/>
          <Route exact path="/state/:id"
                render={(routerProps) => <StateDetails setStateId={setStateId} match={routerProps.match}/>}/>
          <Route exact path="/locations/:id"
                render={(routerProps) => <LocationDetails stateId={stateId} match={routerProps.match}/>}/>
        </Switch>

        </div>

      </div>
     
      <div className="footer-app">
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
