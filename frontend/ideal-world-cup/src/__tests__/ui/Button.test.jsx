import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../ui/Button';

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
  it('calls back onClick on button click', () => {
    const clickStub = jest.fn();
    const wrapper = shallow(<Button onPress={clickStub}>테스트</Button>);
    expect(clickStub).not.toHaveBeenCalled();
    wrapper.dive().find('button').simulate('click', {});
    expect(clickStub).toHaveBeenCalledTimes(1);
  });
});
