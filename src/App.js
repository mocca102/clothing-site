/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInUpPage from './pages/signInUp-page/SignInUpPage';
import './pages/signInUp-page/SignInUpPage.scss';

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    // listen to auth state and fire at every change
    // fire an async callback with userAuth as its argument

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // QueryRefernce
        const userRef = await createUserProfileDocument(userAuth);

        /*  any time the snapshot change and at the same time it returns a snapshot
        the first time it gets called */
        userRef.onSnapshot((snapShot) => this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          },
        }, () => console.log(this.state)));
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
