import React from 'react';
import GoogleImage from '../../assets/google.png';
import SideImage from '../../assets/image.png';
import { Button } from '../Button';
import { Container } from '../Container';
import { LoginForm } from '../LoginForm';
import './styles.scss';

const blockCls = 'app';

export const Page = () => {
  return (
    <div className={blockCls}>
      <img className={`${blockCls}__image`} src={SideImage} />
      <div className={`${blockCls}__main`}>
        <Container className={`${blockCls}__container`}>
          <div className={`${blockCls}__login`}>
            <p>Welcome back</p>
            <h1 className={`${blockCls}__header`}>Login to your account</h1>
            <LoginForm className={`${blockCls}__form`} />
            <Button className={`${blockCls}__google`} variant="secondary">
              <div className={`${blockCls}__google-inner`}>
                <img src={GoogleImage} />
                <p>Or sign-in with google</p>
              </div>
            </Button>
          </div>
          <p className={`${blockCls}__bottom`}>
            Dont have an account? <a href="#">Join free today</a>
          </p>
        </Container>
      </div>
    </div>
  );
};
