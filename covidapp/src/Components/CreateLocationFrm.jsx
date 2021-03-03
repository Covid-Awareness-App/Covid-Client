import React, { useState } from 'react';

function CreateLocationFrm({ setCreateLocation, id, stateName }) {
    // fetch api post link and set state here
    const axios = require("axios");
    const url = "https://cv19-app.herokuapp.com"

    const [locationFrm, setLocationFrm] = useState({});

    function createLocation() {
        axios
            .post(`${url}/locations`, locationFrm)
            .catch((err) => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createLocation(locationFrm);
        setCreateLocation(false);
    }

    const handleChange = (event) => {
        setLocationFrm({...locationFrm, [event.target.id]: event.target.value});
    };

    return (    
        <form onSubmit={handleSubmit}>
            <label htmlFor="state">Name:</label>
            <select id="state" onChange={handleChange}>
                <option value={id}>{stateName}</option>
            </select>

            <label htmlFor="business name">Business name:</label>
            <input type="text" id="business name" onChange={handleChange}/>

            <label htmlFor="business img">Business img:</label>
            <input type="text" id="business img" onChange={handleChange}/>

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" onChange={handleChange}/>

            <label htmlFor="hours">Hours:</label>
            <input type="text" id="hours" onChange={handleChange}/>

            <label htmlFor="contact number">Contact number:</label>
            <input type="text" id="contact number" onChange={handleChange}/>

            <label htmlFor="offers">Offers:</label>
            <textarea
                id="offers" 
                cols="30"
                rows="1"
            ></textarea>

            <button type="submit">POST</button>
        </form>
    );
}

export default CreateLocationFrm;