import React from 'react';

import './SignInUpPage.scss';
import '../PageContainer.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInUpPage = () => (
  <div className="page-container">
    <div className="signInUp-page">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInUpPage;
