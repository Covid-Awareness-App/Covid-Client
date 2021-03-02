import React, { useState, useEffect } from 'react';

function StateDetails({match}) {

    const [stateDetail, setStateDetail] = useState({});
    const [businessName, setBusinessName] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/state/${match.params.id}`)
            .then((res) => res.json())
            .then(res => {
                // console.log(res)
                setStateDetail(res)
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8000/locations/${match.params.id}`)
            .then((res1) => res1.json())
            .then(res1 => {
                console.log(res1)
                setBusinessName(res1)
            })
            .catch(console.error);
    }, []);


    console.log(businessName.business_name)
    console.log(businessName.hours)
    console.log(businessName.address)

    return (
        <div>
                   
            <h2>{stateDetail.name}</h2>
            <h3>Average Daily Cases: {stateDetail.average_daily_cases}/day</h3>
            <h3>Get tested / vaccinated at the following locations:</h3>

            {stateDetail.locations && stateDetail.locations.map((location) => (
                <h3>{`business name:${location.address}`}</h3>
            ))}

        </div>
    );
}

export default StateDetails;