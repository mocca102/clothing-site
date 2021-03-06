import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './SignUp.scss';

import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomBtn/CustomBtn';

import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { history, signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      signUpStart(email, password, displayName);
      // const { user } = await auth.createUserWithEmailAndPassword(email, password);
      // await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  renderForm = () => {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="sign-up__form">
        <FormInput
          label="User Name"
          type="text"
          name="displayName"
          handleChange={this.handleChange}
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          handleChange={this.handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          handleChange={this.handleChange}
          value={password}
        />
        <FormInput
          label="confirm password"
          type="password"
          name="confirmPassword"
          handleChange={this.handleChange}
          value={confirmPassword}
        />
        <CustomBtn type="submit">Sign Up</CustomBtn>
      </form>
    );
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I do not have an account</h2>
        <p className="sign-up__subtext">Sign up with your email and password</p>
        {this.renderForm()}
      </div>
    );
  }
}

export default connect(null, { signUpStart })(withRouter(SignUp));
