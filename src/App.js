import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render = () => (
    <Router>
      <div id="outer-container">
        <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} />
        <main id="page-wrap">
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
        </main>
      </div>
    </Router>
  );
}

export default App;
