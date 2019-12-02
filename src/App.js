/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInUpPage from './pages/signInUp-page/SignInUpPage';
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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { setCurrentUser })(App);
