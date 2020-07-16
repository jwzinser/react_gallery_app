import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from "./Nav";
import SearchForm from "./SearchForm";

/**Header with logo, search form and nav links
 * @param Search a function that will search for new photos
 * populates the header
 */
const Header1 = ({Search}) => {

    return (
        <header>
        <img src={require('./react.png')} alt="react"/>
            <SearchForm onSearch={Search} />
            <Nav onMenuClick={Search} />   
        </header>
    )
};

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

