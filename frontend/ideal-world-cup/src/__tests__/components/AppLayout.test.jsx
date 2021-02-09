import React from 'react';
import { shallow } from 'enzyme';

import AppLayout from '../../components/AppLayout';

describe('<AppLayout>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<AppLayout>본문</AppLayout>);
    }).not.toThrow();
  });
});
