import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import IdealWorldCupStartContainer from './containers/ideal_world_cup/IdealWorldCupStartContainer';
import IdealWorldCupMaker from './containers/ideal_world_cup/IdealWorldCupMaker';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route path="/" exact render={() => <IdealWorldCupStartContainer />} />
            <Route path="/idealworldcup/maker" render={() => <IdealWorldCupMaker />} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default App;
