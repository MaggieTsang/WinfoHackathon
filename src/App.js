import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import {ROUTES} from "./constants";

//import logo from './logo.svg';
import './App.css';
import Homepage from './Views/Homepage';
import SelectionResults from './Views/SelectionResults';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path={ROUTES.homepage} component={Homepage}/>
            <Route exact path={ROUTES.results} component={SelectionResults}/>
            <Redirect to={ROUTES.homepage}/>

            {/* <Redirect to={ROUTES.homepage}/> */}
        </Switch>
     </Router>
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

export default App;
