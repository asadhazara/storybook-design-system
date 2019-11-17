import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

const req = require.context('../packages', true, /\.story\.(tsx|mdx)$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(withInfo);
  addDecorator(withA11y);
  return req.keys().map((filename) => req(filename));
}
configure(loadStories, module);

// Option defaults:
addParameters({
  options: {
    panelPosition: 'right',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

