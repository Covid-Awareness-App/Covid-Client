import React from 'react';

function DeleteLocation({ id }) {
    const axios = require("axios");
    const url = "https://cv19-app.herokuapp.com/locations";

    function deleteLoctn() {
        axios
            .delete(`${url}/${id}`)
            .then(() => window.history.back());
    }

    return (
        <div>
            <button onClick={deleteLoctn}>Delete Location</button>
        </div>
    );
}

export default DeleteLocation;