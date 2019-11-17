import React, { FC } from 'react';

interface Props {
  /**
   * This the type for the input html tag. such as, `text` and `radio`
   */
  type: string;
}

export const Input: FC<Props> = (props: Props) => {
  return <input {...props} />;
};

Input.defaultProps = {
  type: 'text',
};
