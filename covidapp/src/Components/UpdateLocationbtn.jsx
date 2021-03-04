import React, { useState } from 'react';
import UpdateLocationFrm from './UpdateLocationFrm';

function UpdateLocationbtn( { id, stateId}) {
    const [locationBtn, setLocationBtn] = useState(false);

    function handleChangeLocBtn() {
        setLocationBtn(true);
    }

    if (locationBtn === false) {
        return (
            <div>
                <button onClick={handleChangeLocBtn}>Update Location</button>      
            </div>
        );
    }

    if (locationBtn === true)
        return(
            <div>
                <UpdateLocationFrm 
                    stateId={stateId}
                    setLocationBtn={setLocationBtn}
                    id={id}
                />
            </div>
        )

}

export default UpdateLocationbtn;