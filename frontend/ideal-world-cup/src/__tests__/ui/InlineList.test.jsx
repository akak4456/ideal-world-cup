import React from 'react';
import { shallow } from 'enzyme';

import InlineList from '../../ui/InlineList';

describe('<InlineList>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<InlineList>테스트</InlineList>);
    }).not.toThrow();
  });
});
