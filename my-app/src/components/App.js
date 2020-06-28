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
      cats: [],
      dogs: [],
      computer: []
    }
  }

  /**calls search function when mounting the component
  */
  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('computer');
    this.performSearch();

  }

  /**Unmount the state objs to prevent memmory leak
  */
  componentWillUnmount() {
    clearInterval(this.state.photos);
    clearInterval(this.state.dogs);
    clearInterval(this.state.cats);
    clearInterval(this.state.computer);
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
          topic === 'cats' ? this.setState({
                            cats: response.data.photos.photo,
                            loading: false
                          })
          : topic === 'dogs' ? this.setState({
                              dogs: response.data.photos.photo,
                              loading: false
                            }) 
          : topic === 'computer' ? this.setState({
                                  computer: response.data.photos.photo,
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
                <Route path='/tags/cats' render={() => <Gallery photos={ this.state.cats } />} />
                <Route path='/tags/dogs' render={() => <Gallery photos={ this.state.dogs } />} />
                <Route path='/tags/computer' render={() => <Gallery photos={ this.state.computer } />} />
                <Route component={NotFound} />
              </Switch>

          </div>
        </BrowserRouter>
        

    );
  }
  
}
export default App;
