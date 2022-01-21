import React from 'react';
import classNames from 'classnames';
import './styles.scss';

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const blockCls = 'container';

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={classNames(blockCls, className)}>{children}</div>;
};
