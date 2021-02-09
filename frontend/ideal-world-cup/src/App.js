import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppLayout from './components/AppLayout';
import IdealWorldCupStartContainer from './containers/ideal_world_cup/IdealWorldCupStartContainer';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <IdealWorldCupStartContainer />
      </AppLayout>
    );
  }
}

export default App;
