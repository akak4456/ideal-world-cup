import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
class IdealWorldCupStartCard extends PureComponent {
  render() {
    return (
      <Card>
        <Card.Title>이상형 월드컵 제목</Card.Title>
        <Card.Body>
          <CardGroup>
            <Card>
              <Card.Text>이미지1</Card.Text>
            </Card>
            <Card>
              <Card.Text>이미지2</Card.Text>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    );
  }
}

IdealWorldCupStartCard.propTypes = {};

export default IdealWorldCupStartCard;
