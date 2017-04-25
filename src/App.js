import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render = () => (
    <Router>
      <div>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
      </div>
    </Router>
  );
}

export default App;
