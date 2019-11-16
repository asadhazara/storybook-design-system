import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button: React.FC<Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'type' | 'onClick'
>> = (props) => {
  return <button {...props} />;
};

Button.defaultProps = {
  type: 'button',
};
