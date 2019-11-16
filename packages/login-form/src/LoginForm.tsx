import { Input } from '@taxi/input';
import * as React from 'react';

export interface LoginFormProps {
  onClick?: () => void;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  onClick,
}) => {
  return (
    <div>
      <Input id="name" label="Name" />
      <Input id="password" label="Password" />

      <div>
        <button onClick={onClick}>Log in</button>
      </div>
    </div>
  );
};
