import React, { useState, useEffect } from 'react';

function StateDetails({match}) {

    const [stateDetail, setStateDetail] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/state/${match.params.id}`)
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                setStateDetail(res)
            })
            .catch(console.error);
    }, []);

    
    return (
        <div>
            
            <h2>{stateDetail.name}</h2>
            <h3>Average Daily Cases: {stateDetail.average_daily_cases}</h3>
            <h3>Get tested / vaccinated at the following locations:</h3>

            {stateDetail.locations && stateDetail.locations.map((location) => (
                <h3>{`${location}`}</h3>
            ))}

        </div>
    );
}

export default StateDetails;