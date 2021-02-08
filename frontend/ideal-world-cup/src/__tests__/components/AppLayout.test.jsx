import React from 'react';
import { shallow } from 'enzyme';

import AppLayout from '../../components/AppLayout';

describe('<AppLayout>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<AppLayout>테스트</AppLayout>);
    }).not.toThrow();
  });
});
