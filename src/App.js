import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// import About from './components/About';
import Projects from './components/Projects';
// import Menu from './components/Menu';

import './App.css';

// <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} />

class App extends Component {
  render() {
    return (
      <Router>
      <div id="outer-container">
        <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Projects} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </Router>
    );
  }
}

export default App;
