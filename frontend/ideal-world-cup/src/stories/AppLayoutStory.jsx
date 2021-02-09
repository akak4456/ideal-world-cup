import React from 'react';
import { storiesOf } from '@storybook/react';
import AppLayout from '../components/AppLayout';

storiesOf('components/AppLayout', module).addWithJSX('기본 설정', () => (
  <AppLayout>본문</AppLayout>
));
