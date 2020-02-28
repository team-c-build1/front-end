import React from 'react';

function NavBar() {
    return (
        <div className="navigation">
            <Link to="/">
                <div className="logo-box">
                    <h1>Team C!</h1>
                </div>
            </Link>
            
            <div className="navigation-links">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
            </div>
        </div>
    )
}

export default NavBar;