import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';
import Menu from './components/Menu';

import './App.css';

class App extends Component {
  render = () => (
    <Router>
      <div id="outer-container">
        <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} />
        <main id="page-wrap">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Redirect to="/about" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
