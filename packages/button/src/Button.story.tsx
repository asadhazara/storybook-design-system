import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  subtitle: 'This is a button component',
  component: Button,
};

export const normal = (): React.ReactNode => <Button type="button">Hello</Button>;
export const primary = (): React.ReactNode => (
  <Button variant="primary" type="button" onClick={action('logIn clicked')}>
    {text('Value', 'Button')}
  </Button>
);

normal.primary = {
  parameters: { notes: 'Dit is een knop.' },
  info: {
    source: true,
  },
};

normal.story = {
  parameters: { notes: 'Dit is een knop.' },
  info: {
    source: true,
  },
};
