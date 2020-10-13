import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUserId, logout }) => {
    const display = currentUserId ? (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    )

    return (
        <header className="nav-bar">
            <h1 className="logo">Aura Beauty</h1>
            <div>
                {display}
            </div>
        </header>
    );
};

export default NavBar