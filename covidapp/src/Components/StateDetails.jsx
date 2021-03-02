import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StateDetails({match}) {

    const [stateDetail, setStateDetail] = useState({});
    const [locations, setLocations] = useState([]);
    // const [businessName, setBusinessName] = useState({});

    const getLocations = (response) => {
        let locationArray = []
        response.forEach((location) => {
            fetch(location)
            .then((res) => res.json())
            .then(res => {
                setLocations(locations.concat(res))
                // let locationArray = [locations];
                locationArray.push(res);
                // setLocations(locationArray)
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



    // useEffect(() => {
    //     fetch(`http://localhost:8000/locations/${match.params.id}`)
    //         .then((res1) => res1.json())
    //         .then(res1 => {
    //             console.log(res1)
    //             setBusinessName(res1)
    //         })
    //         .catch(console.error);
    // }, []);


    // console.log(businessName)
    // console.log(businessName.hours)
    // console.log(businessName.address)
    // console.log(locations)
    // console.log(locations[0].id)
    // console.log(locations[1].id)
    // console.log(locations[2].id)

    // console.log(setStateDetail)


    return (
        <div>
                   
            <h2>{stateDetail.name}</h2>
            <h3>Average Daily Cases: {stateDetail.average_daily_cases}/day</h3>
            <h3>Get tested / vaccinated at the following locations:</h3>

            {stateDetail.locations && locations.map((location) => (
                <Link to={`/locations/${locations[0].id}`} key={locations.id}>
                <h3>{`Business Name: ${location.business_name}`}</h3>
                </Link>
            ))}

            {/* {businessName && businessName.business_name.map((businessName) => (
                <h3>{`business name:${businessName.address}`}</h3>
            ))} */}

            {/* <h3>{businessName.business_name}</h3>
            <h3>{businessName.address}</h3> */}

        </div>
    );
}

export default StateDetails;