import React from 'react';
import LoginForm from '@/components/LoginForm';
import styles from './index.less';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
