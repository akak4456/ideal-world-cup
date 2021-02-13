import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
class IdealWorldCupMaker extends PureComponent {
  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>제목</Form.Label>
        </Form.Group>
      </Form>
    );
  }
}

IdealWorldCupMaker.propTypes = {};

export default IdealWorldCupMaker;
