import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../ui/Heading';
storiesOf('ui/Heading', module)
  .addWithJSX('기본 설정', () => <Heading>안녕하세요</Heading>)
  .addWithJSX('dark 예제', () => <Heading dark>안녕하세요</Heading>)
  .addWithJSX('inverse 예제', () => <Heading inverse>안녕하세요</Heading>)
  .addWithJSX('level1 예제', () => <Heading level={1}>안녕하세요</Heading>)
  .addWithJSX('level2 예제', () => <Heading level={2}>안녕하세요</Heading>)
  .addWithJSX('level3 예제', () => <Heading level={3}>안녕하세요</Heading>)
  .addWithJSX('level4 예제', () => <Heading level={4}>안녕하세요</Heading>)
  .addWithJSX('level5 예제', () => <Heading level={5}>안녕하세요</Heading>)
  .addWithJSX('level6 예제', () => <Heading level={6}>안녕하세요</Heading>);
