import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'; 

import './index.css';


import Header from './components/Header';
import NotFound from './components/NotFound';
import Search from './components/Search'
import PictureSearch from './components/PictureSearch'



// Routes handler, search is assigned to root path
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            
            <Route exact path="/" component={() => (<Search />)}></Route>
            <Route path="/cars" component={() => (<PictureSearch query={"cars"} />)}></Route>
            <Route path="/trains" component={() => (<PictureSearch query={"trains"} />)}></Route>
            <Route path="/space" component={() => (<PictureSearch query={"space"} />)}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;