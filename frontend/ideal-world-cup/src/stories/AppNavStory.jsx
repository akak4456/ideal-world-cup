import React from 'react';
import { storiesOf } from '@storybook/react';

import AppNav from '../components/AppNav';

storiesOf('components/AppNav', module).addWithJSX('기본 설정', () => <AppNav />);
