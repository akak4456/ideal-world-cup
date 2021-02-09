import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppNav from './AppNav';
import Container from 'react-bootstrap/Container';
class AppLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <AppNav />
        <div>{children}</div>
      </Container>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
