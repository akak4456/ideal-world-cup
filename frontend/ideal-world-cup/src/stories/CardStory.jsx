import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../ui/Card';

storiesOf('ui/Card', module).addWithJSX('기본 설정', () => <Card>안녕하세요</Card>);
