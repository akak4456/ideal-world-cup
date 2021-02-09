import React from 'react';
import { storiesOf } from '@storybook/react';
import IdealWorldCupStartCard from '../components/ideal_world_cup/IdealWorldCupStartCard';

storiesOf('components/ideal_world_cup/IdealWorldCupStartCard', module).addWithJSX(
  '기본 설정',
  () => <IdealWorldCupStartCard />,
);
