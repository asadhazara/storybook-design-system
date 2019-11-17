import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface ButtonProps extends Pick<HTMLButtonProps, 'type' | 'onClick'> {
  variant?: 'default' | 'primary' | 'danger' | 'warning';
  size?: 'tiny' | 'normal' | 'large';
}

const defaultProps = {
  outline: 0,
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
  bg: 'rgba(9, 30, 66, .04)',
  color: 'rgb(80, 95, 121)',
  '&:hover': {
    bg: 'rgba(9, 30, 66, .08)',
  },
  '&:focus': {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
};

const StyledButton = styled.button<{ variant?: string; size?: string }>`
  ${variant({
    variants: {
      default: {
        ...defaultProps,
      },
      primary: {
        ...defaultProps,
        bg: 'rgb(0, 82, 204)',
        color: 'white',
        '&:hover': {
          bg: 'rgb(0, 101, 255)',
        },
      },
      danger: {
        ...defaultProps,
        bg: 'rgb(222, 53, 11)',
        color: 'white',
        '&:hover': {
          bg: 'rgba(222, 53, 11, .8)',
        },
      },
      warning: {
        ...defaultProps,
        bg: 'rgb(255, 171, 0)',
        color: 'black',
        '&:hover': {
          bg: 'rgba(255, 171, 0, .8)',
        },
      },
    },
  })}

  ${variant({
    prop: 'size',
    variants: {
      normal: {
        p: 2,
        fontSize: 1,
      },
      large: {
        p: 3,
        fontSize: 2,
      },
      tiny: {
        p: 1,
      },
    },
  })}
`;

/**
  Button Docs - a description is provided here
  A button can have multiple attributes, such as `type`, `onClick` etc.
**/
const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

Button.defaultProps = {
  type: 'button',
  variant: 'default',
  size: 'normal',
};

export { Button };
