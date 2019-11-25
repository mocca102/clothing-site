/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page/HomePage';

const HatsPage = () => (
  <div>HatsPage</div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
