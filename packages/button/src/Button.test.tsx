import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('should match snapshot and styles for default props', () => {
    expect(render(<Button type="button" />).asFragment()).toMatchSnapshot();
  });
});
