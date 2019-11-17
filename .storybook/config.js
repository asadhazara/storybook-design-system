import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../packages', true, /\.story\.(tsx|mdx)$/);
function loadStories() {
  addDecorator(withKnobs);
  addDecorator(withInfo);
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

