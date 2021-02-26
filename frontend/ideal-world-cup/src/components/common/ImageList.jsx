import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import DragAndDrop from './DragAndDrop';

class ImageList extends Component {
  state = {
    files: [],
  };
  handleDrop = (files) => {
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      let reader = new FileReader();
      let file = files[i];
      reader.onloadend = () => {
        const newFileItem = {
          ...file,
          previewURL: reader.result,
        };
        this.setState({
          files: this.state.files.concat(newFileItem),
        });
      };
      reader.readAsDataURL(file);
    }
  };
  render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        {this.state.files.length == 0 ? (
          <p>드롭해</p>
        ) : (
          <Container>
            <Row>
              {this.state.files.map((file, idx) => (
                <Col sm={4}>
                  <Card key={idx}>
                    <Card.Img variant="top" src={file.previewURL} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </DragAndDrop>
    );
  }
}

export default ImageList;
