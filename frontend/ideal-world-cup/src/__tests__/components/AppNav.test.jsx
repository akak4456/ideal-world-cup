import React from 'react';
import { shallow } from 'enzyme';

import AppNav from '../../components/AppNav';

describe('<AppNav>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<AppNav />);
    }).not.toThrow();
  });
});
