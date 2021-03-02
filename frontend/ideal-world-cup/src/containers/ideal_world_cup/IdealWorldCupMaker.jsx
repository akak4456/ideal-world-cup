import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import ImageList from '../../components/common/ImageList';
import { withTranslation } from 'react-i18next';
import Api from '../../Api';
class IdealWorldCupMaker extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDrop.bind(this);
    this.handleRemove.bind(this);
    this.handleSubmit.bind(this);
    this.state = {
      files: [],
    };
  }
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
  handleRemove = (id) => {
    console.log(id);
    const { files } = this.state;
    this.setState({
      files: files.filter((file, idx) => idx != id),
    });
  };
  handleSubmit = () => {
    Api.post('/idealworldcup', { params: {} }).then((response) => console.log(response));
  };
  render() {
    const { t } = this.props;
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>{t('title')}</Form.Label>
          <Form.Control type="text" placeholder={t('input_title')} />
        </Form.Group>
        <Form.Group controlId="formDetail">
          <Form.Label>{t('detail')}</Form.Label>
          <Form.Control type="text" placeholder={t('input_detail')} />
        </Form.Group>
        <Button variant="primary" onClick={() => this.handleSubmit()}>
          {t('save')}
        </Button>
        <Form.Group controlId="formImageList">
          <Form.Label>
            {t('image_list')}({t('count')}:{this.state.files.length})
          </Form.Label>
          <ImageList
            handleDrop={this.handleDrop}
            handleRemove={this.handleRemove}
            files={this.state.files}
          />
        </Form.Group>
      </Form>
    );
  }
}

IdealWorldCupMaker.propTypes = {};

export default withTranslation()(IdealWorldCupMaker);
