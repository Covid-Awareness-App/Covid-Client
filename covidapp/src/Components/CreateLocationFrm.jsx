import React, { useState } from 'react';

function CreateLocationFrm({ setCreateLocation, id, stateName }) {
    // fetch api post link and set state here
    const axios = require("axios");
    const url = "https://cv19-app.herokuapp.com"

    const [locationFrm, setLocationFrm] = useState({
        
            "name": `https://cv19-app.herokuapp.com/state/${id}`
        
    });

    function createLocation() {
        // console.log(locationFrm)
        axios
            .post(`${url}/locations/`, locationFrm)
            .then(res => console.log(res))
            .catch((err) => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createLocation();
        setCreateLocation(false);
    }

    const handleChange = (event) => {
        setLocationFrm({...locationFrm, [event.target.id]: event.target.value});
    };

    return (    
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <select id="name" onChange={handleChange}>
                <option value={`https://cv19-app.herokuapp.com/state/${id}`}>{stateName}</option>
            </select>

            <label htmlFor="business_name">Business name:</label>
            <input type="text" id="business_name" onChange={handleChange}/>

            <label htmlFor="business_img">Business img:</label>
            <input type="text" id="business_img" onChange={handleChange}/>

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" onChange={handleChange}/>

            <label htmlFor="hours">Hours:</label>
            <input type="text" id="hours" onChange={handleChange}/>

            <label htmlFor="contact_number">Contact number:</label>
            <input type="text" id="contact_number" onChange={handleChange}/>

            <label htmlFor="offers">Offers:</label>
            <textarea
                id="offers" 
                cols="30"
                rows="1"
                onChange={handleChange}
            ></textarea>

            <button type="submit">POST</button>
        </form>
    );
}

export default CreateLocationFrm;