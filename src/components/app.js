import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from './navigation/navigation';
import Wedding from './pages/wedding';
import Family from './pages/family';
import Couple from './pages/couple';
import Home from './pages/home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

          <Router>

            <Navigation/>

              <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/couple" component={Couple} />
                <Route path="/family" component={Family} />
                <Route path="/wedding" component={Wedding} />

              </Switch>
              
          </Router>

      </div>
    );
  }
}
