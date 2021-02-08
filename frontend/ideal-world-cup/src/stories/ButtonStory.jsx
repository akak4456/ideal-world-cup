import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'react-bootstrap/Button';

storiesOf('bootstrap/Button', module)
  .addWithJSX('기본 설정', () => <Button>버튼</Button>)
  .addWithJSX('primary 설정', () => <Button variant="primary">버튼</Button>)
  .addWithJSX('secondary 설정', () => <Button variant="secondary">버튼</Button>);
