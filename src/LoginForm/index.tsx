import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import './styles.scss';

export interface LoginFormProps {
  className?: string;
}

const blockCls = 'login-form';

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <form className={classNames(blockCls, className)} onSubmit={(e) => e.preventDefault}>
      <div className={`${blockCls}__inputs`}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
      </div>
      <div className={`${blockCls}__extra`}>
        <div className={`${blockCls}__checkbox`}>
          <input name="remember" type="checkbox" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <p>Forgot password?</p>
      </div>
      <Button variant="primary" type="submit">
        Login now
      </Button>
    </form>
  );
};
