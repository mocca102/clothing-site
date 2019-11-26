import React from 'react';

import './SignIn.scss';

import FormInput from '../FormInput/FormInput';

class SignIn extends React.Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  renderForm = () => {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} action="submit" className="sign-in__form">
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
        <input type="submit" name="" id="" />
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

export default SignIn;
