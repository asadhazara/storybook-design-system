import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

storiesOf('Button', module)
  .addParameters({ component: Button })
  .add('default', () => <Button onClick={action('logIn clicked')}>{text('Value', 'Button')}</Button>)
  .add('primary', () => (
    <Button variant="primary" onClick={action('logIn clicked')}>
      {text('Value', 'Button')}
    </Button>
  ))
  .add('danger', () => (
    <Button variant="danger" onClick={action('logIn clicked')}>
      {text('Value', 'Button')}
    </Button>
  ))
  .add('warning', () => (
    <Button variant="warning" onClick={action('logIn clicked')}>
      {text('Value', 'Button')}
    </Button>
  ));
