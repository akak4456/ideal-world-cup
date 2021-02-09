import React from 'react';
import { shallow } from 'enzyme';

import IdealWorldCupStartContainer from '../../../containers/ideal_world_cup/IdealWorldCupStartContainer';
describe('<IdealWorldCupStartContainer>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<IdealWorldCupStartContainer />);
    }).not.toThrow();
  });
});
