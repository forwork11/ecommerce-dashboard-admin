import React from 'react';
import './Login.less';
import { AppLayout } from '../../sections/layouts';
import LoginForm from '../../sections/forms/LoginForm';

const Login = () => {
  return (
    <AppLayout
    noHeader
    noLeftMenu>
      <LoginForm />
    </AppLayout>
  );
};

export default Login;