import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import i18next from '../../config/lang/i18n';
import { Button, ButtonGroup, Card, Container, Row, Col } from 'react-bootstrap';
class IdealWorldCupStartCard extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Card>
        <Card.Title>이상형 월드컵 제목</Card.Title>
        <Card.Body>
          <Container style={{ padding: 0 }}>
            <Row>
              <Col style={{ padding: 0 }}>
                <Card>
                  <Card.Img src="https://via.placeholder.com/150"></Card.Img>
                  <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>
                    여자
                  </Card.Title>
                </Card>
              </Col>
              <Col style={{ padding: 0 }}>
                <Card>
                  <Card.Img src="https://www.cfht.hawaii.edu/Instruments/Imaging/WIRCam/WIRCam1stLight/m57_highresol_c.jpg"></Card.Img>
                  <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>
                    남자
                  </Card.Title>
                </Card>
              </Col>
            </Row>
          </Container>
          <ButtonGroup size="lg" vertical style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outline-danger">{t('start')}</Button>
            <Button variant="outline-warning">{t('see_ranking')}</Button>
            <Button variant="outline-primary">{t('share')}</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

IdealWorldCupStartCard.propTypes = {};

export default withTranslation()(IdealWorldCupStartCard);
