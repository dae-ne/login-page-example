import React from 'react';
import classNames from 'classnames';
import './styles.scss';

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
}

const blockCls = 'button';

export const Button = ({ variant, type, children, className }: ButtonProps) => {
  return (
    <button className={classNames(blockCls, `${blockCls}--${variant}`, className)} type={type}>
      {children}
    </button>
  );
};
