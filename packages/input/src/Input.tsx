import React, { FC, InputHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface InputProps extends Pick<HTMLInputProps, 'type' | 'placeholder'> {
  /**
   * The props can be described like this aswell
   */
  sizeVariant?: 'normal' | 'large';
  variant?: 'default' | 'error' | 'success';
}

const defaultProps = {
  outline: 0,
  borderRadius: 4,
  border: '1px solid rgba(9, 30, 66, .08)',
  cursor: 'pointer',
  color: 'rgb(80, 95, 121)',
  '&:hover': {
    bg: 'rgba(9, 30, 66, .04)',
  },
  '&:focus': {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    bg: 'rgba(9, 30, 66, .04)',
  },
};

const StyledInput = styled.input<InputProps>`
  ${variant({
    variants: {
      default: {
        ...defaultProps,
      },
      error: {
        ...defaultProps,
        borderColor: 'red',
      },
      success: {
        ...defaultProps,
        borderColor: 'green',
      },
    },
  })}

  ${variant({
    prop: 'sizeVariant',
    variants: {
      normal: {
        p: 2,
        fontSize: 1,
      },
      large: {
        p: '12px',
        fontSize: 3,
      },
    },
  })}
`;

export const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

Input.defaultProps = {
  type: 'text',
  variant: 'default',
  sizeVariant: 'normal',
  placeholder: 'Type something...',
};
