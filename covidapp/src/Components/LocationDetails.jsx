import React, { useState, useEffect } from 'react';
import UpdateLocationbtn from './UpdateLocationbtn';
import DeleteLocation from './DeleteLocation';

function LocationDetails({match}) {
    const [locateDetails, setLocateDetails] = useState({});

    useEffect(() => {
        fetch(`https://cv19-app.herokuapp.com/locations/${match.params.id}`)
            .then((res) => res.json())
            .then(res => {
                // console.log(res)
                setLocateDetails(res)
            })
            .catch(console.error);
    }, []);

    return (
        <div className="stateDetails">

            <h2>{`Business Name: ${locateDetails.business_name}`}</h2>
            <img src={`${locateDetails.business_img}`} alt={`Image of ${locateDetails.business_name}`}/>
            <h3>{`Address: ${locateDetails.address}`}</h3>
            <h3>{`Business Hours: ${locateDetails.hours}`}</h3>
            <h3>{`Contact Information: ${locateDetails.contact_number}`}</h3>
            <h3>{`This Location Provides: ${locateDetails.offers}`}</h3>
            
            <UpdateLocationbtn id={locateDetails.id}/>
            <DeleteLocation id={locateDetails.id}/>
        </div>
    );
}

export default LocationDetails;