import React, { useState } from 'react';
import CreateLocationFrm from './CreateLocationFrm';

function CreateLocationBtn({ id, stateName }) {
    const [createLocation, setCreateLocation] = useState(false);

    function handleChangeLoc() {
        setCreateLocation(true);
    }

    if (createLocation === false) {
        return (
            <div>
                <button onClick={handleChangeLoc}>Add Location</button>      
            </div>
        );
    }

    if (createLocation === true) 
        return(
            <div>
                <CreateLocationFrm 
                    setCreateLocation={setCreateLocation} 
                    id={id}
                    stateName={stateName}    
                />
            </div>
        )
}

export default CreateLocationBtn;