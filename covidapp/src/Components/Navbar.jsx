import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [newState, setNewState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/state')
            .then((res) => res.json())
            .then(res => {
                // console.log(res)
                setNewState(res)
            })
        .catch(console.error)
    }, []);

        return (
            <div className="navbar-container">
                {newState && newState.map((state) => (
                    <Link to={`/state/${state.id}`} key={state.id}>
                        <div>
                            <h3>{`${state.name}`}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        );
    
}

export default Navbar;