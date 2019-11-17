<center>
  <img src="https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/media/hero.png" width="100%" />
</center>

# Storybook Design System

This repository contains the component library of `Fictief` which is presented with Storybook

NOTE: this uses yarn to enjoy full feature of yarn workspaces.

## Get Started

First add the packages.

```sh
yarn bootstrap
```

Start storybook and see the magic!

```sh
yarn storybook
```

### Stories in MDX

To add stories in markdown just add a `[component-name].story.mdx` somewhere in `package/\*`. Like so:

```md
import { Meta, Story, Preview, Props, Source, Description } from '@storybook/addon-docs/blocks';
import { text } from '@storybook/addon-knobs';
import { Button } from './';

<Meta title="Component|All Buttons" component={Button} />

# Button

<Description of={Button} />

This is line about this component. `Enjoy!`

<Preview>
  <Story name="default">
    <Button size="tiny" variant="default" type="button">
      {text('Value', 'Button')}
    </Button>
  </Story>
  <Story name="primary">
    <Button variant="primary" type="button">
      Button
    </Button>
  </Story>
  <Story name="warning">
    <Button size="large" variant="warning" type="button">
      Button
    </Button>
  </Story>
  <Story name="danger">
    <Button size="large" variant="danger" type="button">
      Button
    </Button>
  </Story>
</Preview>
```

### CSF(Component Story Format) Stories

To add stories in markdown just add a `[component-name].story.tsx` somewhere in `package/\*`. Like so:

```typescript
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
    <Button size="tiny" type="button">
      default | tiny
    </Button>
    <br />
    <br />
    <Button type="button" variant="primary">
      primary | normal
    </Button>
    <br />
    <br />
    <Button size="large" type="button" variant="danger">
      danger | large
    </Button>
    <br />
    <br />
    <Button size="large" type="button" variant="warning">
      warning | large
    </Button>
  </>
);
```

## Resources used in this project

Want to learn more? Here are some more articles on the resources used in this project:

- Storybook: [Docs](https://storybook.js.org/docs/basics/introduction/)
- Lerna: [Docs](https://lerna.js.org/)
