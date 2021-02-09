import React from 'react';
import { shallow } from 'enzyme';

import IdealWorldCupStartCard from '../../../components/ideal_world_cup/IdealWorldCupStartCard';

describe('<IdealWorldCupStartCard>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<IdealWorldCupStartCard />);
    }).not.toThrow();
  });
});
