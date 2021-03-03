import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateLocationBtn from './CreateLocationBtn';

function StateDetails({match}) {

    const [stateDetail, setStateDetail] = useState({});
    const [locations, setLocations] = useState([]);

    const getLocations = (response) => {
        let locationArray = []
        response.forEach((location) => {
            fetch(location)
            .then((res) => res.json())
            .then(res => {
                setLocations(locations.concat(res))
                locationArray.push(res);
                // console.log(locationArray)
                setLocations(locationArray)
            })
        })
    }

    useEffect(() => {
        fetch(`https://cv19-app.herokuapp.com/state/${match.params.id}`)
            .then((res) => res.json())
            .then(res => {
                // console.log(res)
                setStateDetail(res)
                getLocations(res.locations)
            })
            .catch(console.error);
    }, []);

    // console.log(locations)
    // console.log(stateDetail.id)




    return (
        <div>
                   
            <h2>{stateDetail.name}</h2>
            <h3>Average Daily Cases: {stateDetail.average_daily_cases}/day</h3>
            <h3>Get tested / vaccinated at the following locations:</h3>

            {stateDetail.locations && locations.map((location) => (
                <Link to={`/locations/${location.id}`}>
                <h3>{`Business Name: ${location.business_name}`}</h3>
                </Link>
            ))}

        <CreateLocationBtn id={stateDetail.id} stateName={stateDetail.name}/>
        </div>

    );
}

export default StateDetails;