import React from 'react';

import Nav from "./Nav";
import SearchForm from "./SearchForm";

/**Header with logo, search form and nav links
 * @param Search a function that will search for new photos
 * populates the header
 */
const Header = ({Search}) => {

    return (
        <header>
        <img src={require('./react.png')} alt="react"/>
            <SearchForm onSearch={Search} />
            <Nav onMenuClick={Search} />   
        </header>
    )
};

  export default Header;