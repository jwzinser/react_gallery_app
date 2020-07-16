import axios from 'axios';
import apiKey from '../config.js';

import React, { Component } from 'react';
import Gallery from './Gallery';

class PictureSearch extends Component {
  constructor() {
    super();
//Initializing state variablesto store information
    this.state = {photos: [], loading: true, query: ''};
  }
  componentDidMount() {
    this.performSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.query,
      loading: true
    });
    this.performSearch(nextProps.query);
  }


//Using axios to fetch images
  performSearch = (query) => {
    if(query !==''){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error ', error);
      });
    }
  }
  render() {
//Displaying loading gif image when loading
    return (
      <div className="container">
        <div className="photo-container">
          {
            (this.state.loading) ? <img src={require('./loading.gif')} alt="loading"/> : <Gallery data={this.state.photos} query={this.state.query} />
          }
        </div>
      </div>
    );
  }
}

export default PictureSearch;
