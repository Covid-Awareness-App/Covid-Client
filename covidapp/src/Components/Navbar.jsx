import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {

    const [newState, setNewState] = useState([]);

    useEffect(() => {
        fetch('https://cv19-app.herokuapp.com/state')
            .then((res) => res.json())
            .then(res => {
                // console.log(res)
                setNewState(res)
            })
        .catch(console.error)
    }, []);

        return (
            <div className="navbar-container">
                <h2>STATES</h2>
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