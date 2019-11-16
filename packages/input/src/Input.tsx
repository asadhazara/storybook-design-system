import React from 'react';

export interface LabelProps {
  labelWidth?: number;
}

export interface InputWithLabelProps extends LabelProps {
  id?: string;
  label?: string;
}

export interface InputWithoutLabelProps extends LabelProps {
  id: string;
  label: string;
}

export type InputLabelProps = InputWithLabelProps | InputWithoutLabelProps;

export interface InputProps {
  name?: string;
  type?: string;
}

export const Input: React.FunctionComponent<InputProps & InputLabelProps> = ({
  label,
  id,
  ...rest
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}:</label>}
      <input id={id} {...rest} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};
