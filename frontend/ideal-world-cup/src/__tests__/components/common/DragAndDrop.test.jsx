import React from 'react';
import { shallow } from 'enzyme';

import DragAndDrop from '../../../components/common/DragAndDrop';

describe('<DragAndDrop>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<DragAndDrop />);
    }).not.toThrow();
  });
});
