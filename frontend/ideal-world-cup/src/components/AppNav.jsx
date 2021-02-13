import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import i18next from '../config/lang/i18n';
import { Navbar, Dropdown, Nav, Form } from 'react-bootstrap';
class AppNav extends PureComponent {
  state = {
    languageTitle: '한국어',
  };
  changeLanguage = (e) => {
    i18next.changeLanguage(e.split(',')[0]);
    this.setState({
      languageTitle: e.split(',')[1],
    });
  };
  render() {
    const { t } = this.props;
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>{t('ideal_world_cup')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown onSelect={this.changeLanguage}>
              <Dropdown.Toggle variant="secondary" size="sm">
                {this.state.languageTitle}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey={['ko', '한국어']}>한국어</Dropdown.Item>
                <Dropdown.Item eventKey={['en', 'ENGLISH']}>ENGLISH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withTranslation()(AppNav);
