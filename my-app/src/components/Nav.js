import React from 'react';

import { NavLink } from 'react-router-dom';

/**Nav links
 * display the navegation link in button type
 */
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <NavLink to='/tags/cats' className="nav-button"><button type="button" id="cats-btn" className="nav-button">cats </button></NavLink> 
                <NavLink to='/tags/dogs' className="nav-button"><button type="button" id="dogs-btn" className="nav-button">dogs</button></NavLink>
                <NavLink to='/tags/computer' className="nav-button"><button type="button" id="computer-btn" className="nav-button">computer</button></NavLink>                    
            </ul>
        </nav>
    );


};

export default Nav;


