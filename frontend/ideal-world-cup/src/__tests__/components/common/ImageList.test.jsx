import React from 'react';
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => '' };
    return Component;
  },
}));
jest.mock('../../../config/lang/i18n', () => {});
import { shallow } from 'enzyme';

import ImageList from '../../../components/common/ImageList';

describe('<ImageList>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<ImageList />);
    }).not.toThrow();
  });
});
