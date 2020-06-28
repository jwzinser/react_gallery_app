import React, { Component } from 'react';
import { withRouter } from 'react-router';


class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  /**Populates the searchText state each time the value of input is changed
   * @param e event handler
   */
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  /**Submit the search input
  * @param e event handler
   * perform a search from the Flickr API and populates the photos
   * redirect to main page to display the results
   */
  handleSubmit = e => {
    e.preventDefault();
    const path = `/search/${this.state.searchText}`;
    this.props.history.push(path);
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();

  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button">search</button>
      </form>      
    );
  }
}

export default withRouter(SearchForm);