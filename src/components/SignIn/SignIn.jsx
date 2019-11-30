import React from 'react';
import { withRouter } from 'react-router-dom';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
      history.push('/');
    } catch (error) {
      console.log('couldn\'t sign in with email and pass:', error.message);
    }
  }

  renderForm = () => {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="sign-in__form">
        <FormInput
          label="Email"
          type="email"
          name="email"
          handleChange={this.handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          handleChange={this.handleChange}
          value={password}
          required
        />
        <div className="sign-in__buttons">
          <CustomBtn type="submit">SIGN IN</CustomBtn>
          <CustomBtn signInWithGoogle={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </CustomBtn>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">
          I already have an account
        </h2>
        <p className="sign-in__subtext">
          Sign in with your email and password
        </p>
        {this.renderForm()}
      </div>
    );
  }
}

export default withRouter(SignIn);
