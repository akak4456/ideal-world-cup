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
    this.handleChange.bind(this);
    this.handleImageDetailChange.bind(this);
    this.state = {
      title: '',
      detail: '',
      files: [],
    };
  }
  handleDrop = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      const reader = new FileReader();
      const file = files[i];
      reader.onloadend = () => {
        const newFileItem = {
          file: file,
          previewURL: reader.result,
          imageDetail: '',
        };
        this.setState({
          ...this.state,
          files: this.state.files.concat(newFileItem),
        });
      };
      reader.readAsDataURL(file);
    }
  };
  handleRemove = (id) => {
    const { files } = this.state;
    this.setState({
      files: files.filter((file, idx) => idx != id),
    });
  };
  handleSubmit = () => {
    console.log(this.state);
    Api.post(
      '/idealworldcup',
      { ...this.state },
      { headers: { 'Content-Type': 'multipart/form-data' } },
    ).then((response) => console.log(response));
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  handleImageDetailChange = (e, idx) => {
    const { files } = this.state;
    this.setState({
      ...this.state,
      files: files.map((item, i) => (i === idx ? { ...item, imageDetail: e.target.value } : item)),
    });
  };
  render() {
    const { t } = this.props;
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>{t('title')}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t('input_title')}
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDetail">
          <Form.Label>{t('detail')}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t('input_detail')}
            name="detail"
            value={this.state.detail}
            onChange={this.handleChange}
          />
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
            handleImageDetailChange={this.handleImageDetailChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

IdealWorldCupMaker.propTypes = {};

export default withTranslation()(IdealWorldCupMaker);
