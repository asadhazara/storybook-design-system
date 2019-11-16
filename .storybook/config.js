import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../packages', true, /\.story\.(tsx|mdx)$/);
function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach((filename) => req(filename));
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

