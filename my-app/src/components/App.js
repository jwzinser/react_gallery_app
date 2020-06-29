import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'; 

import '../App.css';

import axios from 'axios';
import apiKey from '../config.js';

import Header from './Header';
import Gallery from './Gallery';
import NotFound from './NotFound';

export class App extends Component {
  
  constructor() {
    super();

    this.state = {
      photos: [],
      loading: true,
      cars: [],
      trains: [],
      space: []
    }
  }

  /**calls search function when mounting the component
  */
  componentDidMount() {
    this.performSearch('cars');
    this.performSearch('trains');
    this.performSearch('space');
    this.performSearch();

  }

  /**Unmount the state objs to prevent memmory leak
  */
  componentWillUnmount() {
    clearInterval(this.state.photos);
    clearInterval(this.state.cars);
    clearInterval(this.state.trains);
    clearInterval(this.state.space);
  }

  /**perform a search using axios API from Flickr
   * @param topic what topic will search for
   * populates the results in arrays
  */
  performSearch = (topic = 'photoartwork') => {
      this.setState({loading:true})
      const per_page = 24;
      const format = 'json';
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${topic}%2Cphotograph&text=${topic}&per_page=${per_page}&format=${format}&nojsoncallback=1`;
      axios.get(url)
        .then((response) => {
          console.log("Aqui en el search");
          topic === 'cars' ? this.setState({
                            cars: response.data.photos.photo,
                            loading: false
                          })
          : topic === 'trains' ? this.setState({
                              trains: response.data.photos.photo,
                              loading: false
                            }) 
          : topic === 'space' ? this.setState({
                                  space: response.data.photos.photo,
                                  loading: false
                                }) 
          : this.setState({
            photos: response.data.photos.photo,
            loading: false
            })                      

        })
        .catch((err) => {
          console.log('Error fetching and parsing data', err);
        })
  }

  /**render the route with components
  */
  render() { 
    return (
      <BrowserRouter>
          <div className='container'>
              <Header 
                Search={this.performSearch}
                history={this.props.history}
              /> 
              <Switch>
                <Route exact path='/' render={ () => ( 
                  <div className="main-content">
                    {
                      this.state.loading ? <p> Loading ...</p> : this.state.photos ? <Gallery photos={ this.state.photos } /> : <NotFound /> 
                    }
                  </div>
                  )} 
                />
                <Route path='/search/' render={ () => ( 
                  <div className="main-content">
                    {
                      this.state.loading ? <p> Loading ...</p> : this.state.photos ? <Gallery photos={ this.state.photos } /> : <NotFound /> 
                    }
                  </div>
                  )} 
                />
                <Route path='/tags/cars' render={() => <Gallery photos={ this.state.cars } />} />
                <Route path='/tags/trains' render={() => <Gallery photos={ this.state.trains } />} />
                <Route path='/tags/space' render={() => <Gallery photos={ this.state.space } />} />
                <Route component={NotFound} />
              </Switch>

          </div>
        </BrowserRouter>
        

    );
  }
  
}
export default App;
