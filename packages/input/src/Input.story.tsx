import React from 'react';
import { Input } from './Input';

export default {
  title: 'Component|Input',
  subtitle: 'This is a input component',
  component: Input,
};

export const AllFields = (): React.ReactNode => (
  <>
    <Input type="text" />
    <br />
    <br />
    <Input type="text" sizeVariant="large" />
  </>
);
