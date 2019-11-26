/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInUpPage from './pages/signInUp-page/SignInUpPage';
import './pages/signInUp-page/SignInUpPage.scss';

function App() {
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

export default App;
