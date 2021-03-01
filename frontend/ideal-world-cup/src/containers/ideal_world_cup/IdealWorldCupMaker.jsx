import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import ImageList from '../../components/common/ImageList';
import { withTranslation } from 'react-i18next';
class IdealWorldCupMaker extends PureComponent {
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
        <Button variant="primary" type="submit">
          {t('save')}
        </Button>
        <Form.Group controlId="formImageList">
          <Form.Label>{t('image_list')}</Form.Label>
          <ImageList />
        </Form.Group>
      </Form>
    );
  }
}

IdealWorldCupMaker.propTypes = {};

export default withTranslation()(IdealWorldCupMaker);
