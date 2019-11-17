import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Component|Button',
  subtitle: 'This is a button component',
  component: Button,
};

export const allButtons = (): React.ReactNode => <Button type="button">Hello</Button>;
export const primary = (): React.ReactNode => (
  <Button variant="primary" type="button" onClick={action('logIn clicked')}>
    {text('Value', 'Button')}
  </Button>
);

allButtons.story = {
  parameters: {
    info: {
      text: `
        description or documentation about my component, supports markdown

        ~~~js
          function something(a) {
            return a;
          }
        ~~~
      `,
    },
  },
};

primary.story = {
  parameters: { info: 'Dit is een knop.' },
};
