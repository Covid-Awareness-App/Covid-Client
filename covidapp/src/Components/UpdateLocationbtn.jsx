import React, { useState } from 'react';
import UpdateLocationFrm from './CreateLocationFrm';

function UpdateLocationbtn( { id }) {
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
                    setLocationBtn={setLocationBtn}
                    id={id}
                />
            </div>
        )

}

export default UpdateLocationbtn;