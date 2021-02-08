import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
class AppNav extends PureComponent {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>이상형 월드컵</Navbar.Brand>
      </Navbar>
    );
  }
}

export default AppNav;
