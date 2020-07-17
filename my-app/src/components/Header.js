import React from 'react';
import { NavLink } from 'react-router-dom';


//Header that displays the buttons and react image 
const Header = props => (
    
    <nav className="main-nav">

        <img src={require('./react.png')} alt="react"/>

        <ul>
            <li><NavLink exact to='/'>Search</NavLink></li>
            <li><NavLink to='/cars'>Cars</NavLink></li>
            <li><NavLink to='/trains'>Trains</NavLink></li>
            <li><NavLink to='/space'>Space</NavLink></li>
        </ul>
    </nav>
);
export default Header;

