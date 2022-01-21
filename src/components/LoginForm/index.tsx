import React from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import './styles.scss';
import { useLoginForm } from './useLoginForm';

export interface LoginFormProps {
  className?: string;
}

const blockCls = 'login-form';

export const LoginForm = ({ className }: LoginFormProps) => {
  const { register, handleSubmit, errors } = useLoginForm();
  return (
    <form className={classNames(blockCls, className)} onSubmit={handleSubmit}>
      <div className={`${blockCls}__inputs`}>
        <label htmlFor="email">Email</label>
        <input
          className={classNames(`${blockCls}__input`, {
            [`${blockCls}__input--error`]: errors.email,
          })}
          type="email"
          {...register('email')}
        />
        <label htmlFor="password">Password</label>
        <input
          className={classNames(`${blockCls}__input`, {
            [`${blockCls}__input--error`]: errors.password,
          })}
          type="password"
          {...register('password')}
        />
      </div>
      <div className={`${blockCls}__extra`}>
        <div className={`${blockCls}__checkbox`}>
          <input type="checkbox" {...register('remember')} />
          <label htmlFor="remember">Remember me</label>
        </div>
        <a className={`${blockCls}__link`} href="#">
          Forgot password?
        </a>
      </div>
      <Button variant="primary" type="submit">
        Login now
      </Button>
    </form>
  );
};
