import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import IdealWorldCupStartContainer from './containers/ideal_world_cup/IdealWorldCupStartContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppLayout>
          <IdealWorldCupStartContainer />
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default App;
