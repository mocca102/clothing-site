/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInUpPage from './pages/signInUp-page/SignInUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

import './pages/signInUp-page/SignInUpPage.scss';

class App extends React.Component {
  componentDidMount() {
    // listen to auth state and fire at every change
    // fire an async callback with userAuth as its argument

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const { setCurrentUser } = this.props;
      if (userAuth) {
        // QueryRefernce
        const userRef = await createUserProfileDocument(userAuth);

        /*  any time the snapshot change and at the same time it returns a snapshot
        the first time it gets called */
        userRef.onSnapshot((snapShot) => setCurrentUser({
          id: snapShot.id,
          ...snapShot.data(),
        }));
      } else {
        setCurrentUser(userAuth); // null
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? (<Redirect to="/" />) : (<SignInUpPage />))}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
