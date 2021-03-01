import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IdealWorldCupStartCard from '../../components/ideal_world_cup/IdealWorldCupStartCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageList from '../../components/common/ImageList';
class IdealWorldCupStartContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
        </Row>
        <Row>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
          <Col md>
            <IdealWorldCupStartCard />
          </Col>
          <Col md></Col>
          <Col md></Col>
        </Row>
      </Container>
    );
  }
}

IdealWorldCupStartContainer.propTypes = {};

export default IdealWorldCupStartContainer;
