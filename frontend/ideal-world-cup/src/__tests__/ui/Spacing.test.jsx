import React from 'react';
import { shallow } from 'enzyme';

import Spacing from '../../components/ui/Spacing';

describe('<Spacing>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Spacing>테스트</Spacing>);
    }).not.toThrow();
  });
});
