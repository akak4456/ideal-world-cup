import React from 'react';
import { shallow } from 'enzyme';

import IdealWorldCupMaker from '../../../containers/ideal_world_cup/IdealWorldCupMaker';
describe('<IdealWorldCupMaker>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<IdealWorldCupMaker />);
    }).not.toThrow();
  });
});
