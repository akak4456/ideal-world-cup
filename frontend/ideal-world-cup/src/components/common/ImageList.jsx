import React, { Component } from 'react';
import { Card, CardColumns, Form, Button, ButtonGroup } from 'react-bootstrap';
import DragAndDrop from './DragAndDrop';
import { withTranslation } from 'react-i18next';
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
  removeFile = (id) => {
    console.log(id);
    const { files } = this.state;
    this.setState({
      files: files.filter((file, idx) => idx != id),
    });
  };
  render() {
    const { t } = this.props;
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        {this.state.files.length == 0 ? (
          <p>{t('drag_and_drop_here')}</p>
        ) : (
          <CardColumns>
            {this.state.files.map((file, idx) => (
              <Card key={idx}>
                <Card.Img variant="top" src={file.previewURL} />
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formTitle">
                      <Form.Label>{t('image_name')}</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form>
                  <ButtonGroup
                    size="lg"
                    vertical
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Button variant="danger" onClick={() => this.removeFile(idx)}>
                      {t('delete')}
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        )}
      </DragAndDrop>
    );
  }
}

export default withTranslation()(ImageList);
