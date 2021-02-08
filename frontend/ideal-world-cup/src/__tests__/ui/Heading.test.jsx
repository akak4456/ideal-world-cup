import React from 'react';
import { shallow } from 'enzyme';

import Heading from '../../ui/Heading';

describe('<Heading>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Heading>테스트</Heading>);
    }).not.toThrow();
  });
});
