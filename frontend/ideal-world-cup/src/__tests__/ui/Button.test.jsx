import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/ui/Button';

describe('<Text>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Button>테스트</Button>);
    }).not.toThrow();
  });

  it('contains button text', () => {
    expect(
      shallow(<Button>테스트</Button>)
        .dive()
        .text()
        .includes('테스트'),
    ).toBe(true);
  });
});
