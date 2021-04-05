import React from 'react';
import { Route } from 'react-router-dom';
import Restaurants from './Restaurant/restaurant';
import allNightLife from './AllNightlife/allnightlife';
import Header from './Header/header';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Header />
      <p>Welcome to Daytona Beach</p>
      <Route exact path='/restaurants' component={Restaurants} />
      <Route exact path='/nightlife' component={allNightLife} />
    </main>
  );
}

export default App;