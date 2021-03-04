import React, { useState } from "react";

function UpdateLocationFrm({ setLocationBtn, id, stateId }) {
  const axios = require("axios");
  const url = "https://cv19-app.herokuapp.com";

  const [updtLocFrm, setUpdtLocFrm] = useState({
    name: `https://cv19-app.herokuapp.com/state/${stateId}`,
    feedbacks: [],
  });

  function updateLocation() {
    console.log(updtLocFrm);
    fetch(`${url}/locations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updtLocFrm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleSubmitLoc = (event) => {
    event.preventDefault();
    updateLocation(updtLocFrm);
    setLocationBtn(false);
  };

  const handleChangeLoc = (event) => {
    setUpdtLocFrm({ ...updtLocFrm, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmitLoc} className="submitForm">
      <label htmlFor="name">Name:</label>
      <select id="name" onChange={handleChangeLoc}>
        <option value="https://cv19-app.herokuapp.com/state/1">
          Conneticut
        </option>
        <option value="https://cv19-app.herokuapp.com/state/2">
          Massachusetts
        </option>
        <option value="https://cv19-app.herokuapp.com/state/3">
          Rhode Island
        </option>
        <option value="https://cv19-app.herokuapp.com/state/4">Iowa</option>
        <option value="https://cv19-app.herokuapp.com/state/5">
          Pennsylvania
        </option>
        <option value="https://cv19-app.herokuapp.com/state/6">
          New Jersey
        </option>
        <option value="https://cv19-app.herokuapp.com/state/7">
          South Carolina
        </option>
        <option value="https://cv19-app.herokuapp.com/state/8">Maine</option>
        <option value="https://cv19-app.herokuapp.com/state/9">Kentucky</option>
        <option value="https://cv19-app.herokuapp.com/state/10">
          North Carolina
        </option>
        <option value="https://cv19-app.herokuapp.com/state/11">Texas</option>
        <option value="https://cv19-app.herokuapp.com/state/12">Georgia</option>
        <option value="https://cv19-app.herokuapp.com/state/13">
          Illinois
        </option>
        <option value="https://cv19-app.herokuapp.com/state/14">
          New York
        </option>
        <option value="https://cv19-app.herokuapp.com/state/15">
          Minnesota
        </option>
        <option value="https://cv19-app.herokuapp.com/state/16">Florida</option>
        <option value="https://cv19-app.herokuapp.com/state/17">
          California
        </option>
      </select>

      <label htmlFor="business_name">Business name:</label>
      <input type="text" id="business_name" onChange={handleChangeLoc} />

      <label htmlFor="business_img">Business img:</label>
      <input type="text" id="business_img" onChange={handleChangeLoc} />

      <label htmlFor="address">Address:</label>
      <input type="text" id="address" onChange={handleChangeLoc} />

      <label htmlFor="hours">Hours:</label>
      <input type="text" id="hours" onChange={handleChangeLoc} />

      <label htmlFor="contact_number">Contact number:</label>
      <input type="text" id="contact_number" onChange={handleChangeLoc} />

      <label htmlFor="offers">Offers:</label>
      <textarea
        id="offers"
        cols="30"
        rows="1"
        onChange={handleChangeLoc}
      ></textarea>

      <button type="submit" onClick={handleSubmitLoc}>
        Update Location
      </button>
    </form>
  );
}

export default UpdateLocationFrm;
