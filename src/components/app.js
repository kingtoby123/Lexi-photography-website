import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './navigation/navigation';
import Session from './pages/session';
import Investments from './pages/investments';
import About from './pages/about';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

          <Router>

            <Navigation/>

              <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/investments" component={Investments} />
                <Route path="/session" component={Session} />

              </Switch>
              
          </Router>

      </div>
    );
  }
}
