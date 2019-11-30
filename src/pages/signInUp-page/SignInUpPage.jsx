import React from 'react';

import './SignInUpPage.scss';
import '../PageContainer.scss';

import SignIn from '../../components/SignIn/SignIn';

const SignInUpPage = () => (
  <div className="page-container">
    <div className="signInUp-page">
      <SignIn />
      <SignIn />
    </div>
  </div>
);

export default SignInUpPage;
