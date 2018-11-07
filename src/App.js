import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Posts from './Posts';
import Post from './Post';



export default class App extends Component {

  render() {
    return (
      <Router>
        <div>        
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    );
  }
}