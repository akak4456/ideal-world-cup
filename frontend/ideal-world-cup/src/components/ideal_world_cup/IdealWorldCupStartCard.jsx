import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Card, Container, Row, Col } from 'react-bootstrap';
class IdealWorldCupStartCard extends PureComponent {
  render() {
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
            <Button variant="outline-danger">시작하기</Button>
            <Button variant="outline-warning">랭킹보기</Button>
            <Button variant="outline-primary">공유</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  }
}

IdealWorldCupStartCard.propTypes = {};

export default IdealWorldCupStartCard;
