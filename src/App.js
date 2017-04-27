import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Menu from './components/Menu';

class App extends Component {
  render = () => (
    <Router>
      <div id="outer-container">
        <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} />
        <main id="page-wrap">
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    </Router>
  );
}

export default App;
