import React from 'react';

import PageContainer from '../PageContainer.styles';
import SignInUpPageContainer from './SignInUpPage.styles';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInUpPage = () => (
  <PageContainer>
    <SignInUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInUpPageContainer>
  </PageContainer>
);

export default SignInUpPage;
