import React, { useState } from 'react';

function UpdateLocationFrm({ setLocationBtn, id }) {
    const axios = require("axios");
    const url = "https://cv19-app.herokuapp.com"

    const [updtLocFrm, setUpdtLocFrm] = useState({});

    function updateLocation() {
        axios
            .put(`${url}/locations/${id}`, updtLocFrm)
            .catch((err) => console.log(err));
    }

    const handleSubmitLoc = (event) => {
        event.preventDefault();
        updateLocation(updtLocFrm);
        setLocationBtn(false);
    }

    const handleChangeLoc = (event) => {
        setUpdtLocFrm({...updtLocFrm, [event.target.id]: event.target.value});
    };
    
    return (
        <form onSubmit={handleSubmitLoc}>
            <label htmlFor="state">Name:</label>
            <select id="state" onChange={handleChangeLoc}>
                <option value="1">Conneticut</option>
                <option value="2">Massachusetts</option>
                <option value="3">Rhode Island</option>
                <option value="4">Iowa</option>
                <option value="5">Pennsylvania</option>
                <option value="6">New Jersey</option>
                <option value="7">South Carolina</option>
                <option value="8">Maine</option>
                <option value="9">Kentucky</option>
                <option value="10">North Carolina</option>
                <option value="11">Texas</option>
                <option value="12">Georgia</option>
                <option value="13">Illinois</option>
                <option value="14">New York</option>
                <option value="15">Minnesota</option>
                <option value="16">Florida</option>
                <option value="17">California</option>
            </select>

            <label htmlFor="business name">Business name:</label>
            <input type="text" id="business name" onChange={handleChangeLoc}/>

            <label htmlFor="business img">Business img:</label>
            <input type="text" id="business img" onChange={handleChangeLoc}/>

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" onChange={handleChangeLoc}/>

            <label htmlFor="hours">Hours:</label>
            <input type="text" id="hours" onChange={handleChangeLoc}/>

            <label htmlFor="contact number">Contact number:</label>
            <input type="text" id="contact number" onChange={handleChangeLoc}/>

            <label htmlFor="offers">Offers:</label>
            <textarea
                id="offers" 
                cols="30"
                rows="1"
            ></textarea>

            <button type="submit">Update Location</button>
        </form>
    );
}

export default UpdateLocationFrm;