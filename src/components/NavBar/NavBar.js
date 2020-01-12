import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <button>Dashboard</button>
                <button>Store</button>
                <button>Reports</button>
                <button>Settings</button>
            </div>
            
        </div>
 
    );
}

export default NavBar;