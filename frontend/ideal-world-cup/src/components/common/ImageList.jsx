import React, { Component } from 'react';
import { Card, CardColumns, Form, Button, ButtonGroup } from 'react-bootstrap';
import DragAndDrop from './DragAndDrop';
import { withTranslation } from 'react-i18next';
class ImageList extends Component {
  render() {
    const { t, handleDrop, handleRemove, files, handleImageDetailChange } = this.props;
    return (
      <DragAndDrop handleDrop={handleDrop}>
        {files.length == 0 ? (
          <p>{t('drag_and_drop_here')}</p>
        ) : (
          <CardColumns>
            {files.map((file, idx) => (
              <Card key={idx}>
                <Card.Img variant="top" src={file.previewURL} />
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formTitle">
                      <Form.Label>{t('image_name')}</Form.Label>
                      <Form.Control
                        type="text"
                        value={file.imageDetail}
                        onChange={(e) => handleImageDetailChange(e, idx)}
                      />
                    </Form.Group>
                  </Form>
                  <ButtonGroup
                    size="lg"
                    vertical
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Button variant="danger" onClick={() => handleRemove(idx)}>
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
