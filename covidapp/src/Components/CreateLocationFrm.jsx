import React, { useState } from 'react';

function CreateLocationFrm() {
    // fetch api post link and set state here
    const axios = require("axios");
    const url = "http://localhost:8000"

    const [locationFrm, setLocationFrm] = useState({});

    function createLocation() {
        axios
            .post(`${url}/locations`, locationFrm)
            .catch((err) => console.log(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createLocation(locationFrm);
    }

    const handleChange = (event) => {
        setLocationFrm({...locationFrm, [event.target.id]: event.target.value});
    };

    return (    
        <form action=""></form>
    );
}

export default CreateLocationFrm;