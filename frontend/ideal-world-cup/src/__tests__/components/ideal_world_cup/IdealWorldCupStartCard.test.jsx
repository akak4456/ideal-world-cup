import React from 'react';
import { shallow } from 'enzyme';

import IdealWorldCupStartCard from '../../../components/ideal_world_cup/IdealWorldCupStartCard';
import Card from 'react-bootstrap/Card';
describe('<IdealWorldCupStartCard>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<IdealWorldCupStartCard />);
    }).not.toThrow();
  });
});
