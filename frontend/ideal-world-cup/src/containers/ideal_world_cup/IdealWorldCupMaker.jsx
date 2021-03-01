import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import ImageList from '../../components/common/ImageList';
class IdealWorldCupMaker extends PureComponent {
  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목을 입력해주세요." />
        </Form.Group>
        <Form.Group controlId="formDetail">
          <Form.Label>설명</Form.Label>
          <Form.Control type="text" placeholder="설명, 하고 싶은 말을 자유롭게 해주세요." />
        </Form.Group>
        <ImageList />
      </Form>
    );
  }
}

IdealWorldCupMaker.propTypes = {};

export default IdealWorldCupMaker;
