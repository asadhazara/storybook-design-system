import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Component|Button',
  subtitle: 'This is a button component',
  component: Button,
};

export const allButtons = (): React.ReactNode => (
  <>
    <Button sizeVariant="tiny" type="button">
      default | tiny
    </Button>
    <br />
    <br />
    <Button type="button" variant="primary">
      primary | normal
    </Button>
    <br />
    <br />
    <Button sizeVariant="large" type="button" variant="danger">
      danger | large
    </Button>
    <br />
    <br />
    <Button sizeVariant="large" type="button" variant="warning">
      warning | large
    </Button>
  </>
);

export const defaultButton = (): React.ReactNode => (
  <Button type="button" onClick={action('logIn clicked')}>
    {text('Value', 'Button')}
  </Button>
);

export const primary = (): React.ReactNode => (
  <Button variant="primary" type="button" onClick={action('logIn clicked')}>
    {text('Value', 'Button')}
  </Button>
);

export const danger = (): React.ReactNode => (
  <Button variant="danger" type="button" onClick={action('logIn clicked')}>
    {text('Value', 'Button')}
  </Button>
);

export const warning = (): React.ReactNode => (
  <Button variant="warning" type="button" onClick={action('logIn clicked')}>
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
  parameters: {
    docs: { storyDescription: '4 sizes are supported.' },
  },
};
