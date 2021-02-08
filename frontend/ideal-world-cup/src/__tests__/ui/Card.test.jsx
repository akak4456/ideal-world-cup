import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../ui/Card';

describe('<Card>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Card>테스트</Card>);
    }).not.toThrow();
  });
});
