import React from 'react';

import { NavLink } from 'react-router-dom';

/**Nav links
 * display the navegation link in button type
 */
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <NavLink to='/tags/cars' className="nav-button"><button type="button" id="cars-btn" className="nav-button">cars </button></NavLink> 
                <NavLink to='/tags/trains' className="nav-button"><button type="button" id="trains-btn" className="nav-button">trains</button></NavLink>
                <NavLink to='/tags/space' className="nav-button"><button type="button" id="space-btn" className="nav-button">space</button></NavLink>                    
            </ul>
        </nav>
    );


};

export default Nav;


