import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import About from './components/About';

class App extends Component {
  render = () => (
    <Router>
      <Route path="/about" component={About}/>
    </Router>
  );
}

export default App;
