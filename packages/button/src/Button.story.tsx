import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('logIn clicked')}>{text('Value', 'Button')}</Button>)
  .add('with label', () => (
    <Button onClick={action('logIn clicked')} type={text('type', 'button') as 'button'}>
      {text('Value', 'Button')}
    </Button>
  ));
