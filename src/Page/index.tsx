import React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { LoginForm } from '../LoginForm';
import './styles.scss';

const blockCls = 'app';

export const Page = () => {
  return (
    <div className={blockCls}>
      <div className={`${blockCls}__image`}></div>
      <div className={`${blockCls}__main`}>
        <Container className={`${blockCls}__container`}>
          <div className={`${blockCls}__login`}>
            <p>Welcome back</p>
            <h1 className={`${blockCls}__header`}>Login to your account</h1>
            <LoginForm className={`${blockCls}__form`} />
            <Button className={`${blockCls}__google`} variant="secondary">
              Or sign-in with google
            </Button>
          </div>
          <p className={`${blockCls}__bottom`}>
            Dont have an account? <span>Join free today</span>
          </p>
        </Container>
      </div>
    </div>
  );
};
